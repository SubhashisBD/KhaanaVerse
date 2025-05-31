import { sum } from "../sum";

test("Sum To be Calculated",() => {
    const result = sum(3,4);

    // Assertion
    expect(result).toBe(7);
})