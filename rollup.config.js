import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import path from 'path';
export default {
  input: "bin/index.ts", // 入口文件
  output: {
    file: "dist/index.js", // 输出文件
    format: "esm", // 输出格式为 ES 模块
    sourcemap: true, // 生成 source map
  },
  plugins: [
    copy({
      targets: [
        { src: "bin/config.json", dest: 'dist' } // 复制 JSON 文件到输出目录
      ]
    }),
    json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ESNext", // 使用 ES 模块
          declaration: true, // 不生成 .d.ts 文件
        },
      },
    }),
  ],
  external: [
    path.resolve(import.meta.url, "bin/config.json"), // 将 JSON 文件标记为外部依赖
  ],
};
