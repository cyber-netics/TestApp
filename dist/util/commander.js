"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commander = void 0;
const commander_1 = require("commander");
class Commander extends commander_1.Command {
    constructor() {
        super();
        this.initialize();
    }
    get configOpts() {
        return this.parse().opts();
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    initialize() {
        this._createOptions();
        this._setStatus();
    }
    _setStatus() {
        if (this.configOpts.target) {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
    _createOptions() {
        this.addOption(new commander_1.Option('-t, --target <string>', 'target directory'))
            .addOption(new commander_1.Option('-o, --outFile <string>', 'output file'))
            .addOption(new commander_1.Option('-h, --help [letters...]', 'help'));
    }
}
exports.Commander = Commander;
