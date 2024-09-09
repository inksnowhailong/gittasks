/** 单个任务类型 */
export type Task =  {
  /**任务名称 */
  name: string;
  /**自定义信息 */
  meta?: Record<string, any>;
  /**创建时间 */
  createTime: Number;
}
/**任务的数组 */
export type TasksList = Task[];

export interface TaskTodo {
  /**获取列表 */
  getList<T = TasksList | Error>(...ary: any[]): T | Promise<T>;
  /**添加任务 */
  addTask<T = Task | Error>(task: Task): T;
  /**完成任务 */
  finishTask<T = Task | Error>(task: Task): T;
  /**修改任务描述 */
  updateTask<T = Task | Error>(task: Task): T;
  /**删除任务 */
  deleteTask<T = Task | Error>(task: Task): T;
}
