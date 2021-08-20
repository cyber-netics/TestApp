import { FileSystem, Commander } from "./interface";
import { OptionValues } from "./types";
import { Commands } from "./util/commands";
import * as fs from "fs";
import * as path from "path";

/**
 *
 * Config Properties
 */
class ConfigOptions {
  protected file: string;
  protected config: OptionValues;

  protected get packages(): string[] {
    return fs.readdirSync(this.sourceDir);
  }

  protected get sourceDir(): string {
    return path.resolve(this.config.target);
  }

  protected get destinDir(): string {
    return path.resolve(this.config.outFile);
  }

  protected get sourcePackage(): string {
    return path.resolve(`${this.sourceDir}/${this.file}`);
  }

  protected get destinPackage(): string {
    return path.resolve(`${this.destinDir}/${this.file}`);
  }

  constructor() {
    this.config = this._createConfig();
  }

  /**
   *
   * Interface Modules
   */
  protected _createConfig(): OptionValues {
    const cli = new Commander();
    if (cli.active) return cli.configOpts;

    const arg = new FileSystem();
    if (arg.active) return arg.configOpts;

    throw Error("No target was selected");
  }
}

/**
 *
 * Bundler
 */
export class Bundler extends ConfigOptions {
  protected _package(): Bundler {
    Commands.copyFile(this.sourcePackage, this.destinPackage);
    return this;
  }

  protected _install(): Bundler {
    Commands.npmInstall(this.destinPackage, { prod: true });
    return this;
  }

  protected _cleanUp(): Bundler {
    const files = ["package.json", "package-lock.json"];
    Commands.removeFiles(this.destinPackage, files);
    return this;
  }

  protected _zipDirectory(): Bundler {
    Commands.zipFile(this.file, { inside: this.destinDir });
    return this;
  }

  protected _initialize(file: string): Bundler {
    this.file = file;
    return this;
  }

  public bundle(): void {
    this.packages.map((file) => {
      this._initialize(file)._package()._install()._cleanUp()._zipDirectory();
    });
  }
}
