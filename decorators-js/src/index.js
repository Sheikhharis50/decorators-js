import { composedFunction } from "./decorators/string.js";

const print = (str) => {
  console.log(composedFunction(str, ","));
};

print("Hello world");
