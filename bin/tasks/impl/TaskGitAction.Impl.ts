import { TaskGitAction } from "../abstract/git.abstract";
import { Task } from "../abstract/task.abstract";

export class  TaskGitActionImpl implements TaskGitAction<Task> {
    getBranchList<T = any[] | Error>(...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    createBranch<T = any>(branchName: string, fatherbranch: string, ...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    deleteBranch<T = any>(branchName: string, triggerBranch: string, ...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    switchBranch<T = any>(branchName: string, ...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getCurrentBranch<T = string | Error>(...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getFatherBranch<T = string | Error>(branchName: string, ...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    mergeBranch<T = any>(branchName: string, ...ary: any[]): Promise<T> {
        throw new Error("Method not implemented.");
    }
    constructor() {
    }
}
