
import { Command } from "commander";

import {logger,levelsColor} from './log/index'
export default function createProgram(config:Record<string,any>){
    const program = new Command();
    program
      .name(config.name)
      .usage("<command> [options]")
      .version(config.version)

    // output help information on unknown commands
    program.on("command:*", ([cmd]) => {
      const availableCommands = program.commands.map((cmd) => cmd.name);
      if (availableCommands.includes(cmd)) return;

      logger.error(`找不到命令： ${cmd}`);
      program.outputHelp();
    });

    const oldOutputHelp = program.outputHelp;
    program.outputHelp = function () {
      oldOutputHelp.call(program, (text) => {
        const colored = text
          .replace(/^Usage: (.+)\n/gm, (m, $1) => "使用: " + levelsColor.primary($1) + "\n")
          .replace(/^ {2}(\w+)/gm, (m, $1) => "  " + levelsColor.primary($1));

        return colored

      });
    };


    return program
};
