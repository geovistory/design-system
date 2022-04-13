export declare class GvPerson {
  name: string;
  lastname: string;
  birthdate: string;
  parsedBirthDate: Date;
  mode: 'long' | 'short';
  render(): any;
  toggleMode(): void;
  getInnerHTML_long(): any;
  getInnerHTML_short(): any;
}
