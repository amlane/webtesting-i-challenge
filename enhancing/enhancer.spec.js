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

    it("should subtract 10 from durablity when enhancement is greater than or equal to 15", () => {
      const item = { enhancement: 15, durability: 80 };
      expect(enhancer.fail(item).durability).toBe(70);
    });

    it("should subtract 1 from enhancement when enhancement is greater than 16", () => {
      const item = { enhancement: 15, durability: 100 };
      expect(enhancer.fail(item).durability).toBe(90);
    });

    it("should return 0 if item.durability is equal to 0", () => {
      const item = { enhancement: 17, durability: 4 };
      expect(enhancer.fail(item).durability).toBe(0);
      expect(enhancer.fail(item).enhancement).toBe(16);
    });
  });

  describe("get()", () => {
    it("should return same name if enhancement is equal to zero", () => {
      const item = { name: "Yo mama", enhancement: 0 };
      expect(enhancer.get(item).name).toBe("Yo mama");
    });

    it("should return name with enhancement level", () => {
      const item = { name: "Yo daddy", enhancement: 5 };
      expect(enhancer.get(item).name).toBe("[+5] Yo daddy");
    });
  });
});
