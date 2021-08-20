"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compress = void 0;
const cp = require("child_process");
const path = require("path");
class Compress {
    constructor(opts) {
        this.innerDir = path.resolve(opts.inside);
    }
    execute(cmd) {
        cp.execSync(`cd ${this.innerDir} && ${cmd}`);
    }
    compress(file) {
        this.execute(`zip -r ${file}.zip ${file}`);
    }
}
exports.Compress = Compress;
