import { BASE62_CHARACTERS, BASE62 } from "./constants";

export const encode62 = (input: number) : string => {
  if (input === 0) {
    return "0";
  }

  let result = '';
  let num = input;
  let remainder;

  while (num > 0) {
    remainder = num % BASE62;
    result = BASE62_CHARACTERS[remainder] + result;
    num = Math.floor(num / BASE62);
  }

  return result;

}