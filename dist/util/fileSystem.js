"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FS = void 0;
const fs = require("fs");
const fse = require("fs-extra");
class FS {
    static readJsonFile(file) {
        const fileContent = fs.readFileSync(file, {
            flag: 'r',
            encoding: 'utf8',
        });
        return JSON.parse(fileContent);
    }
    static deleteFile(file) {
        fs.unlinkSync(file);
    }
    static copyFile(source, destination, overwrite = true) {
        fse.copySync(source, destination, { overwrite });
    }
}
exports.FS = FS;
