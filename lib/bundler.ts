import { JRC, CLI } from "./interface";
import { OptionValues } from "./types";

import * as fs from "fs";
import * as path from "path";

class Client {
  private _config: OptionValues;

  protected get config(): OptionValues {
    return this._config;
  }

  private set _setConfig(config: OptionValues) {
    this._config = config;
  }

  constructor() {
    this._setConfig = this._createConfig();
  }

  private _createConfig(): OptionValues {
    const cli = new CLI();
    if (cli.active) return cli.options;

    const arg = new JRC();
    if (arg.active) return arg.options;

    throw Error("No target was selected");
  }
}

export class Bundler extends Client {
  constructor() {
    super();
    this._bundler();
  }

  private get files() {
    const filePath = this.config.target;
    return fs.readdirSync(path.resolve(filePath));
  }

  private _bundler() {
    this.files.map((files) => {
      console.log("files", files);
    });
  }
}
