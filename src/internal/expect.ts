import { expect as baseExpect } from "@playwright/test";

export const expect = baseExpect.extend({
  endsWith(string: string, expected: string) {
    const assertionName = "endsWith";
    let pass: boolean = string.endsWith(expected);

    const message = () =>
      this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
      "\n\n" +
      `String: ${string}\n` +
      `Expected: ${this.isNot ? "not" : ""} to ends with ${this.utils.printExpected(expected)}\n` +
      `Received: ${this.utils.printReceived(string.substring(string.length - expected.length))}`;

    return {
      message,
      pass,
      name: assertionName,
      expected,
      actual: string.substring(string.length - expected.length),
    };
  },
});
