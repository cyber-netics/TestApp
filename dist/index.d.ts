import { OptionValues } from "./types";
/**
 *
 * Config Properties
 */
declare class ConfigOptions {
    protected file: string;
    protected config: OptionValues;
    protected get packages(): string[];
    protected get sourceDir(): string;
    protected get destinDir(): string;
    protected get sourcePackage(): string;
    protected get destinPackage(): string;
    constructor();
    /**
     *
     * Interface Modules
     */
    protected _createConfig(): OptionValues;
}
/**
 *
 * Bundler
 */
export declare class Bundler extends ConfigOptions {
    protected _package(): Bundler;
    protected _install(): Bundler;
    protected _cleanUp(): Bundler;
    protected _zipDirectory(): Bundler;
    protected _initialize(file: string): Bundler;
    bundle(): void;
}
export {};
