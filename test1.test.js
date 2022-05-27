const main = require("./index");

describe("Main App", () => {
  const result = main();

  it("hasilLooping should be an array of string", async () => {
    expect(result.hasilLooping).toBeInstanceOf(Array);
    expect(result.hasilLooping.length).toBe(100);
    expect(result.hasilLooping[0]).toBe("Edyth Roberts");
    expect(result.hasilLooping[99]).toBe("Lavern Braun");
  });
});
