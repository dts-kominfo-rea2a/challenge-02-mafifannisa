const main = require("./index");

describe("Main App", () => {
  const result = main();

  it("komentar should be a string", async () => {
    expect(typeof result.komentar).toBe("string");
    expect(result.komentar.toLowerCase()).toBe(
      "jumlah wanita lebih banyak dari pria"
    );
  });
});
