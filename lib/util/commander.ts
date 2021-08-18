import { Command, Option, OptionValues } from 'commander';

export class Commander extends Command {
   private _status: boolean;

   public get configOpts(): OptionValues {
      return this.parse().opts();
   }

   public get status(): boolean {
      return this._status;
   }

   private set status(status: boolean) {
      this._status = status;
   }

   constructor() {
      super();
      this.initialize();
   }

   private initialize(): void {
      this._createOptions();
      this._setStatus();
   }

   private _setStatus() {
      if (this.configOpts.target) {
         this.status = true;
      } else {
         this.status = false;
      }
   }

   private _createOptions(): void {
      this.addOption(new Option('-t, --target <string>', 'target directory'))
         .addOption(new Option('-o, --outFile <string>', 'output file'))
         .addOption(new Option('-h, --help [letters...]', 'help'));
   }
}
