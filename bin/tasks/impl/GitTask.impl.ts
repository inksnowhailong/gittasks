import { TaskGitAction } from "../abstract/git.abstract";
import { TasksList, Task, TaskTodo } from "../abstract/task.abstract";
export class GitTaskImpl  implements TaskTodo {
  constructor(private gitAction: TaskGitAction<Task>) {
  }
  async getList<T = TasksList | Error>(...ary: any[]): Promise<T> {
    const res = await this.gitAction.getBranchList();
    throw new Error("Method not implemented.");
  }
  addTask<T = Task | Error>(task: Task): T {
    throw new Error("Method not implemented.");
  }

  finishTask<T = Task | Error>(task: Task): T {
    throw new Error("Method not implemented.");
  }
  updateTask<T = Task | Error>(task: Task): T {
    throw new Error("Method not implemented.");
  }
  deleteTask<T = Task | Error>(task: Task): T {
    throw new Error("Method not implemented.");
  }
}
