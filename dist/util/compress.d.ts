interface OptionProps {
    inside: string;
}
export declare class Compress {
    protected innerDir: string;
    constructor(opts: OptionProps);
    private execute;
    compress(file: string): void;
}
export {};
