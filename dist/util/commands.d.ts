export declare class Commands {
    static npmInstall(prefix: string, opts?: any): void;
    static cdToFile(filePath: string): string;
    static zipFile(file: string, opts?: any): void;
    static removeFiles(destFile: string, fileList: string[]): void;
    static copyFile(source: string, destination: string): void;
}
