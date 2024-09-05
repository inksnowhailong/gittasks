import  winston,{format} from 'winston';
import chalk from 'chalk';
const { printf } = format;
// 输出当前年月日时分秒
function now() {
    let date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
/**有颜色的打印 */
export const levelsColor = {
    error:chalk.hex('#FF0000'), // 红色
    warn:chalk.hex('#FFA500'), // 橙色
    info:chalk.hex('#0000FF'), // 蓝色
    http:chalk.hex('#008080'), // 青色
    verbose:chalk.hex('#800080'), // 紫色
    debug:chalk.hex('#00FF00'), // 绿色
    silly:chalk.hex('#fff'), // 黄色
    primary:chalk.hex('#ff7b20') // 主题色
};

/*******
 * @description: 打印函数
 * @param {*} Object
 * @return {*}
 */
export const clog = {
    error: (msg) => console.log(levelsColor.error(msg)),
    warn: (msg) => console.log(levelsColor.warn(msg)),
    info: (msg) => console.log(levelsColor.info(msg)),
    http: (msg) => console.log(levelsColor.http(msg)),
    verbose: (msg) => console.log(levelsColor.verbose(msg)),
    debug: (msg) => console.log(levelsColor.debug(msg)),
    silly: (msg) => console.log(levelsColor.silly(msg)),
    zingUI: (msg) => console.log(levelsColor.primary(msg)),
}

// 创建日志记录器
export const logger =  winston.createLogger({
    level: 'debug',
    format: printf(({ level, message,info }) => {
        // error 情况的特殊处理
        if (info instanceof Error) {
            // return `${info.level}: ${info.message} (at ${info.stack})`;
           return `${levelsColor.primary('zing-cli')}|${levelsColor[level](level+' : '+message)}  (at ${info.stack})         ${now()} `;
          }
        return `${levelsColor.primary('zing-cli')}|${levelsColor[level](level+' : '+message)}           ${now()} `;
    }),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
  });
