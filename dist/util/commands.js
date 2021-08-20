"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const cp = require("child_process");
const fileSystem_1 = require("./fileSystem");
const compress_1 = require("./compress");
class Commands {
    static npmInstall(prefix, opts) {
        cp.execSync(`npm install ${opts.prod ? '--only=prod' : ''} --prefix ${prefix}`);
    }
    static cdToFile(filePath) {
        return `cd ${filePath}`;
    }
    static zipFile(file, opts) {
        const zip = new compress_1.Compress(opts);
        zip.compress(file);
    }
    static removeFiles(destFile, fileList) {
        fileList.map((file) => fileSystem_1.FS.deleteFile(`${destFile}/${file}`));
    }
    static copyFile(source, destination) {
        fileSystem_1.FS.copyFile(source, destination);
    }
}
exports.Commands = Commands;
