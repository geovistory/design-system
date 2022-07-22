import { camelCaseToDash } from "./camelCaseToDash";

export function toArgs<T>(props: T): string {
  let args: string[] = [];
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const val = props[key];
      args.push(`${camelCaseToDash(key)}="${val}"`);
    }
  }
  return args.join(' ');
}
