export declare class FS {
    static readJsonFile(file: string): string[];
    static deleteFile(file: string): void;
    static copyFile(source: string, destination: string, overwrite?: boolean): void;
}
