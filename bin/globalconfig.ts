import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import pkg from '../package.json';
const baseconfig = require('./config.json');
const config = {
    name:pkg.name as string,
    version: pkg.version as string,
    ...baseconfig
}
export default config
