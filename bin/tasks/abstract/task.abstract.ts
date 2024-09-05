
/** 单个任务类型 */
export interface Task{
    /**任务名称 */
    name:string;
    /**自定义信息 */
    meta?:Record<string,any>;
    /**创建时间 */
    createTime:Number;

}
/**任务的数组 */
export interface TasksList extends Array<Task>{}

export abstract class ListAbstract{

    /**获取列表 */
    abstract getList<T = TasksList>(...ary:any[]):T|Promise<T>;
    /**添加任务 */
    abstract addTask<T = any>(task:Task):T;
    /**删除任务 */
    abstract deleteTask<T = any>(task:Task):T;

}
