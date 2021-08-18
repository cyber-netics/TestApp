"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
const fs = require("fs");
const path = require("path");
class FileSystem {
    constructor() {
        this.fileName = 'bundless.json';
        this.initialize();
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    get configOpts() {
        return this._configOpts;
    }
    set configOpts(opts) {
        this._configOpts = opts;
    }
    get filePath() {
        return path.resolve(this.fileName);
    }
    initialize() {
        this._createOptions();
        this._setStatus();
    }
    _setStatus() {
        if (this.exists() && this.configOpts.target) {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
    _createOptions() {
        this.configOpts = this.readFile();
    }
    exists() {
        try {
            return fs.existsSync(path.resolve(this.fileName));
        }
        catch (err) {
            return false;
        }
    }
    readFile() {
        const fileContetn = fs.readFileSync(this.filePath, {
            flag: 'r',
            encoding: 'utf8',
        });
        return JSON.parse(fileContetn);
    }
}
exports.FileSystem = FileSystem;
