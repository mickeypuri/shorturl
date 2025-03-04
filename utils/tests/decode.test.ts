import { NUMBER_TO_ENCODE, BASE62_ENCODED_VALUE } from "./testConstants";

import { decode62 } from "../decode";

test ("encode62 correctly encodes a number", () => {
  const decoded = decode62(BASE62_ENCODED_VALUE);

  expect(decoded).toEqual(NUMBER_TO_ENCODE);
})