const main = require("./index");

describe("Main App", () => {
  const result = main();

  it("jumlahPria should be a number", async () => {
    expect(typeof result.jumlahPria).toBe("number");
    expect(result.jumlahPria).toBe(48);
  });
});
