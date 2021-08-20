import { Command, Option, OptionValues } from "commander";
import { FS } from "./util/fileSystem";
import * as path from "path";

/**
 *
 * Abstract Config Interface
 */
export abstract class InterfaceConfig {
  public active: boolean;
  public configOpts: OptionValues;

  constructor() {
    this.createOptions();
    this.validate();
  }

  protected abstract createOptions(): void;

  protected validate(): void {
    this.active = this.configOpts.target ? true : false;
  }
}

/**
 *
 * Get Config via CLI
 */
export class Commander extends InterfaceConfig {
  protected createOptions(): void {
    this.configOpts = new Command()
      .addOption(new Option("-t, --target <string>", "target directory"))
      .addOption(new Option("-o, --outFile <string>", "output directory"))
      .addOption(new Option("-h, --help [letters...]", "help"))
      .parse()
      .opts();
  }
}

/**
 *
 * Get Config via bundless.json
 */
export class FileSystem extends InterfaceConfig {
  private get filePath(): string {
    return path.resolve("bundless.json");
  }

  protected createOptions(): void {
    this.configOpts = FS.readJsonFile(this.filePath);
  }
}
