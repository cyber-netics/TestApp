import { Commander } from "./util/commander";
import { FileSystem } from "./util/fileSystem";
import { OptionValues } from "./types";

export abstract class Config {
  public active: boolean;
  public name: string;
}

/**
 *
 * CLI
 *
 */
export class JRC extends Config {
  public active: boolean;
  private _options: OptionValues;

  public get options(): OptionValues {
    return this._options;
  }

  private set options(fileSystem: OptionValues) {
    this.active = fileSystem.status;
    this._options = fileSystem.configOpts;
  }

  constructor() {
    super();
    this.initialize();
  }

  private initialize() {
    this.options = new FileSystem();
  }
}

/**
 *
 * ARG
 *
 */
export class CLI extends Config {
  public active: boolean;
  private _options: OptionValues;

  public get options(): OptionValues {
    return this._options;
  }

  private set options(commander: OptionValues) {
    this.active = commander.status;
    this._options = commander.configOpts;
  }

  constructor() {
    super();
    this.initialize();
  }

  private initialize() {
    this.options = new Commander();
  }
}
