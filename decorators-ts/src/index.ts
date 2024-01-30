import { join, reverse, split } from "./decorators/string";

class StringManager {
  constructor() {}

  @split
  @reverse
  @join("-")
  print(str: string) {
    console.log("print: ", str);
  }
}

const manager = new StringManager();
manager.print("Hello World");
