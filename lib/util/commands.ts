import * as cp from 'child_process';
import { FS } from './fileSystem';
import { Compress } from './compress';

export class Commands {
   public static npmInstall(prefix: string, opts?: any): void {
      cp.execSync(`npm install ${opts.prod ? '--only=prod' : ''} --prefix ${prefix}`);
   }

   public static cdToFile(filePath: string): string {
      return `cd ${filePath}`;
   }

   public static zipFile(file: string, opts?: any): void {
      const zip = new Compress(opts);
      zip.compress(file);
   }

   public static removeFiles(destFile: string, fileList: string[]): void {
      fileList.map((file) => FS.deleteFile(`${destFile}/${file}`));
   }

   public static copyFile(source: string, destination: string): void {
      FS.copyFile(source, destination);
   }
}
