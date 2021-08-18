"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundler = void 0;
const interface_1 = require("./interface");
const fs = require("fs");
const path = require("path");
class Client {
    constructor() {
        this._setConfig = this._createConfig();
    }
    get config() {
        return this._config;
    }
    set _setConfig(config) {
        this._config = config;
    }
    _createConfig() {
        const cli = new interface_1.CLI();
        if (cli.active)
            return cli.options;
        const arg = new interface_1.JRC();
        if (arg.active)
            return arg.options;
        throw Error("No target was selected");
    }
}
class Bundler extends Client {
    constructor() {
        super();
        this._bundler();
    }
    get files() {
        const filePath = this.config.target;
        return fs.readdirSync(path.resolve(filePath));
    }
    _bundler() {
        this.files.map((files) => {
            console.log("files", files);
        });
    }
}
exports.Bundler = Bundler;
