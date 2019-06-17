const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("should restore durability to 100", () => {
      const item = { durability: 0 };
      expect(enhancer.repair(item).durability).toBe(100);
    });
  });

  describe("succeed()", () => {
    it("should increases enhancement levels by 1", () => {
      const item = { enhancement: 0 };
      expect(enhancer.succeed(item).enhancement).toBe(1);
    });

    it("should not increase enhancement levels by 1 if greater than 20", () => {
      const item = { enhancement: 20 };
      expect(enhancer.succeed(item).enhancement).toBe(20);
    });

    it("should not change durability", () => {
      const item = { durability: 80 };
      expect(enhancer.succeed(item).durability).toBe(80);
    });
  });

  describe("fail()", () => {
    it("should subtract 5 from durablity when enhancement is less than 15", () => {
      const item = { enhancement: 10, durability: 100 };
      expect(enhancer.fail(item).durability).toBe(95);
    });
  });
});
