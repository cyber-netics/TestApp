import { OptionValues } from "commander";
/**
 *
 * Abstract Config Interface
 */
export declare abstract class InterfaceConfig {
    active: boolean;
    configOpts: OptionValues;
    constructor();
    protected abstract createOptions(): void;
    protected validate(): void;
}
/**
 *
 * Get Config via CLI
 */
export declare class Commander extends InterfaceConfig {
    protected createOptions(): void;
}
/**
 *
 * Get Config via bundless.json
 */
export declare class FileSystem extends InterfaceConfig {
    private get filePath();
    protected createOptions(): void;
}
