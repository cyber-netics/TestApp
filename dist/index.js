"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundler = void 0;
const interface_1 = require("./interface");
const commands_1 = require("./util/commands");
const fs = require("fs");
const path = require("path");
/**
 *
 * Config Properties
 */
class ConfigOptions {
    constructor() {
        this.config = this._createConfig();
    }
    get packages() {
        return fs.readdirSync(this.sourceDir);
    }
    get sourceDir() {
        return path.resolve(this.config.target);
    }
    get destinDir() {
        return path.resolve(this.config.outFile);
    }
    get sourcePackage() {
        return path.resolve(`${this.sourceDir}/${this.file}`);
    }
    get destinPackage() {
        return path.resolve(`${this.destinDir}/${this.file}`);
    }
    /**
     *
     * Interface Modules
     */
    _createConfig() {
        const cli = new interface_1.Commander();
        if (cli.active)
            return cli.configOpts;
        const arg = new interface_1.FileSystem();
        if (arg.active)
            return arg.configOpts;
        throw Error("No target was selected");
    }
}
/**
 *
 * Bundler
 */
class Bundler extends ConfigOptions {
    _package() {
        commands_1.Commands.copyFile(this.sourcePackage, this.destinPackage);
        return this;
    }
    _install() {
        commands_1.Commands.npmInstall(this.destinPackage, { prod: true });
        return this;
    }
    _cleanUp() {
        const files = ["package.json", "package-lock.json"];
        commands_1.Commands.removeFiles(this.destinPackage, files);
        return this;
    }
    _zipDirectory() {
        commands_1.Commands.zipFile(this.file, { inside: this.destinDir });
        return this;
    }
    _initialize(file) {
        this.file = file;
        return this;
    }
    bundle() {
        this.packages.map((file) => {
            this._initialize(file)._package()._install()._cleanUp()._zipDirectory();
        });
    }
}
exports.Bundler = Bundler;
const data = new Bundler();
data.bundle();
