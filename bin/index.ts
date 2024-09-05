#!/usr/bin/env node

import figlet from "figlet";
import latestVersion from "latest-version";
import semver from "semver";

import { clog, logger } from "./log/index";
import createProgram from "./commandCore";
import config from "./globalconfig";

import list from "./commands/list";
async function main() {
  /**显示头部 */
  await showHeader(config.version);

  /**
   * 进入命令主程序流程
   */
  const program = createProgram(config);
  // 列表命令
  list(program);
  /**判断 pkg中的脚手架版本 并判断是否需要更新 */
  //   await checkVersion(config.name, config.version);
  /**program.parse必须在 注册命令后 parse  否则命令 无效 */
  program.parse(process.argv);
}

/*******
 * @description: 检查版本
 * @return {*}
 */
async function checkVersion(name, version) {
  const latest = await latestVersion(name);
  if (semver.gt(latest, version)) {
    logger.warn(
      `当前版本${version}已经过时,请及时更新到${latest},运行 npm install -g ${name} 更新`
    );
  }
}
/*******
 * @description: 输出头部
 * @return {*}
 */
async function showHeader(version) {
  const text = await figlet.text("Git Tasks\n");

  clog.zingUI(`
 ${"-".repeat(35)}

 ${text}

              ${version}
 ${"-".repeat(35)}
 `);
}
/**zing 启动! */
main();
