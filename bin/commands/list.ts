import { Command } from "commander";
import { initGit } from "../git/git";
import { oraSpinner } from "../log/ora";
import ora from "ora";
import { levelsColor } from "../log/index";
import config from "../globalconfig";
import treeify from "treeify";
export default function (program: Command) {
  program
    .command("list")
    .description("任务列表")
    .action(async () => {
      const git = initGit();
      let loadingstatus = ora({
        text: "项目创建中...",
        spinner: oraSpinner,
      });

      loadingstatus.start();
      try {
        const branchSummary = await git.branch();
        loadingstatus.stop();
        // 获取所有本地任务分支
        const localBranches = branchSummary.all.filter((branch) =>
          branch.startsWith(config.gitPrefix)
        );
        // console.log('first',  nameToTree([
        //   "task_1",
        //   "task_1_1",
        //   "task_1_1_1",
        //   "task_1_2",
        //   "task_2",
        //   "task_2_1",
        //   "task_2_1_1",
        //   "task_2_2",
        //   "task_3",
        //   "task_3_1",
        //   "task_3_1_1",
        //   "task_3_2",
        // ]))
        const treeData = buildTree(localBranches);
        if(Object.keys(treeData).length===0){
          console.log(levelsColor.info("暂无gittasks的任务分支，请创建"));
          return;
        }
        console.log(levelsColor.debug(treeify.asTree(treeData,true)));


      } catch (err) {
        console.error("Failed to get branches:", err);
      }
    });
}

function nameToTree(branchs: string[]) {
  let tree: Record<string, any> = {};
  branchs.forEach((branch) => {
    recursiveTree(branch, tree);
  });

  function recursiveTree(branch: string, tree: Record<string, any>) {
    branch= branch.replace(config.gitPrefix, "");
    const branchArr = branch.split("_");
    const levelKey = branchArr.shift();
    let tempTree = tree;
    if (!tempTree[levelKey]) {
      tempTree[levelKey] = {};
    }
    if (branchArr.length === 0) {
      return null
    }
    const childBranch = branchArr.join("_");
   recursiveTree(
      childBranch,
      tempTree[levelKey]
    );
  }
  return tree;
}

function buildTree(data) {
  const tree = {};

  data.forEach(item => {
    item= item.replace(config.gitPrefix, "");
    const parts = item.split('_');
    let currentLevel = tree;

    parts.forEach((part, index) => {
      if (!currentLevel[part]) {
        currentLevel[part] = index === parts.length - 1 ? null : {};
      }
      currentLevel = currentLevel[part];
    });
  });

  return tree;
}

