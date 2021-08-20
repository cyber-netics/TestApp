import * as cp from 'child_process';
import * as path from 'path';

interface OptionProps {
   inside: string;
}

export class Compress {
   protected innerDir: string;

   constructor(opts: OptionProps) {
      this.innerDir = path.resolve(opts.inside);
   }

   private execute(cmd: string): void {
      cp.execSync(`cd ${this.innerDir} && ${cmd}`);
   }

   public compress(file: string): void {
      this.execute(`zip -r ${file}.zip ${file}`);
   }
}
