import { levelsColor } from "./index";

// 进度条样式
export const oraSpinner = {
  interval: 100,
  frames: [
    `G${levelsColor.primary("i")}tTasks 🌑`,
    `Gi${levelsColor.primary("t")}Tasks 🌒`,
    `Git${levelsColor.primary("T")}asks 🌓`,
    `GitT${levelsColor.primary("a")}sks 🌔`,
    `GitTa${levelsColor.primary("s")}ks 🌕`,
    `GitTas${levelsColor.primary("k")}s 🌖`,
    `GitTask${levelsColor.primary("s")} 🌗`,
  ],
};
