export abstract class TaskGitAction {
  /** 获取git分支列表 */
  abstract getBranchList<T = any[] | Error>(...ary: any[]): Promise<T>;
  /**新建分支 */
  abstract createBranch<T = any | Error>(
    branchName: string,
    fatherbranch: string,
    ...ary: any[]
  ): Promise<T>;
  /**删除分支 */
  abstract deleteBranch<T = any | Error>(
    branchName: string, //分支名称
    triggerBranch: string, // 要切换到的分支
    ...ary: any[]
  ): Promise<T>;
  /**切换分支 */
  abstract switchBranch<T = any | Error>(
    branchName: string, //分支名称
    ...ary: any[]
  ): Promise<T>;
  /**获取当前分支 */
  abstract getCurrentBranch<T = string | Error>(...ary: any[]): Promise<T>;
  /**获取当前分支的父分支 */
  abstract getFatherBranch<T = string | Error>(
    branchName: string,
    ...ary: any[]
  ): Promise<T>;

  /**合并当前分支到father分支 */
  abstract mergeBranch<T = any | Error>(
    branchName: string,
    ...ary: any[]
  ): Promise<T>;
}
