const main = require("./index");

describe("Main App", () => {
  const result = main();

  it("jumlahWanita should be a number", async () => {
    expect(typeof result.jumlahWanita).toBe("number");
    expect(result.jumlahWanita).toBe(52);
  });
});
