import { describe, expect, test } from "bun:test";
import { condish } from ".";

describe("Condish", () => {
  test("first element renders", () => {
    const options = condish(1, 0);
    const result = options.get(true);
    expect(result).toBe(1);
  });
  test("second element renders", () => {
    const harris = condish("Y", "N");
    const result = harris.get(false);
    expect(result).toBe("N");
  });
});
