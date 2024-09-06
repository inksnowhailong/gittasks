import { TaskGitAction } from "../abstract/git.abstract";
import { TasksList, Task, TaskAbstract } from "../abstract/task.abstract";
export class GitTaskImpl extends TaskAbstract {
  constructor(private gitAction: TaskGitAction) {
    super();
  }
  async getList<T = TasksList | Error>(...ary: any[]): Promise<T> {
    const res = await this.gitAction.getBranchList();
    throw new Error("Method not implemented.");
  }
  addTask<T = Task | Error>(task: Task): T {
    throw new Error("Method not implemented.");
  }
  deleteTask<T = Task | Error>(task: Task): T {
    throw new Error("Method not implemented.");
  }
}
