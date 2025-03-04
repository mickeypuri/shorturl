import { NUMBER_TO_ENCODE, BASE62_ENCODED_VALUE } from "./testConstants";

import { encode62 } from "../encode"

test ("encode62 correctly encodes a number", () => {
  const encoded = encode62(NUMBER_TO_ENCODE);
  
  expect(encoded).toEqual(BASE62_ENCODED_VALUE);
})