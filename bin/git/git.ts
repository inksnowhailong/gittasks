import { simpleGit, SimpleGit, SimpleGitOptions } from "simple-git";

export function initGit() {
    const options: Partial<SimpleGitOptions> = {
      baseDir: process.cwd(),
      binary: "git",
      maxConcurrentProcesses: 6,
      trimmed: false,
    };

    // when setting all options in a single object
    const git: SimpleGit = simpleGit(options);
    return git
  }
