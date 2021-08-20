"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = exports.Commander = exports.InterfaceConfig = void 0;
const commander_1 = require("commander");
const fileSystem_1 = require("./util/fileSystem");
const path = require("path");
/**
 *
 * Abstract Config Interface
 */
class InterfaceConfig {
    constructor() {
        this.createOptions();
        this.validate();
    }
    validate() {
        this.active = this.configOpts.target ? true : false;
    }
}
exports.InterfaceConfig = InterfaceConfig;
/**
 *
 * Get Config via CLI
 */
class Commander extends InterfaceConfig {
    createOptions() {
        this.configOpts = new commander_1.Command()
            .addOption(new commander_1.Option("-t, --target <string>", "target directory"))
            .addOption(new commander_1.Option("-o, --outFile <string>", "output directory"))
            .addOption(new commander_1.Option("-h, --help [letters...]", "help"))
            .parse()
            .opts();
    }
}
exports.Commander = Commander;
/**
 *
 * Get Config via bundless.json
 */
class FileSystem extends InterfaceConfig {
    get filePath() {
        return path.resolve("bundless.json");
    }
    createOptions() {
        this.configOpts = fileSystem_1.FS.readJsonFile(this.filePath);
    }
}
exports.FileSystem = FileSystem;
