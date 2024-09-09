export interface TaskGitAction<T = any> {
  /** 获取git分支列表 */
  getBranchList<R = T[] | Error>(...ary: any[]): Promise<R>;
  /**新建分支 */
  createBranch<R = T | Error>(
    branchName: string,
    fatherbranch: string,
    ...ary: any[]
  ): Promise<R>;
  /**删除分支 */
  deleteBranch<R = T | Error>(
    branchName: string, //分支名称
    triggerBranch: string, // 要切换到的分支
    ...ary: any[]
  ): Promise<R>;
  /**切换分支 */
  switchBranch<R = T | Error>(
    branchName: string, //分支名称
    ...ary: any[]
  ): Promise<R>;
  /**获取当前分支 */
  getCurrentBranch<R = T | Error>(...ary: any[]): Promise<R>;
  /**获取当前分支的父分支 */
  getFatherBranch<R = T | Error>(
    branchName: string,
    ...ary: any[]
  ): Promise<R>;

  /**合并当前分支到father分支 */
  mergeBranch<R = T | Error>(branchName: string, ...ary: any[]): Promise<R>;
}
