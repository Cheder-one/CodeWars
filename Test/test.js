const chai = require("chai");
const assert = chai.assert;
const rot13 = require("./01_File");

describe("Tests", function () {
  it("Sample tests", function () {
    for (const [input, expected] of [
      ["test", "grfg"],
      ["Test", "Grfg"],
    ]) {
      assert.strictEqual(
        rot13(input),
        expected,
        `Test failed with messsage = '${input}'`
      );
    }
  });
});
