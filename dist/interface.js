"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = exports.JRC = exports.Config = void 0;
const commander_1 = require("./util/commander");
const fileSystem_1 = require("./util/fileSystem");
class Config {
}
exports.Config = Config;
/**
 *
 * CLI
 *
 */
class JRC extends Config {
    constructor() {
        super();
        this.initialize();
    }
    get options() {
        return this._options;
    }
    set options(fileSystem) {
        this.active = fileSystem.status;
        this._options = fileSystem.configOpts;
    }
    initialize() {
        this.options = new fileSystem_1.FileSystem();
    }
}
exports.JRC = JRC;
/**
 *
 * ARG
 *
 */
class CLI extends Config {
    constructor() {
        super();
        this.initialize();
    }
    get options() {
        return this._options;
    }
    set options(commander) {
        this.active = commander.status;
        this._options = commander.configOpts;
    }
    initialize() {
        this.options = new commander_1.Commander();
    }
}
exports.CLI = CLI;
