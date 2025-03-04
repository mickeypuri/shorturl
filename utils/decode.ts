import { BASE62_CHARACTERS, BASE62 } from "./constants";

export const decode62 = (input: string) : number => {
  let result = 0;

  for (let i = 0; i < input.length; ++i) {
    result += BASE62_CHARACTERS.indexOf(input[input.length -1 - i]) * Math.pow(BASE62, i);
  }

  return result;
}