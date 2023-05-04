const { stringRepeat } = require("../src/index")

test("should return an empty string when n and s are empty", () => {
    expect(stringRepeat(1, '')).toBe('')
})

test("should return 'o' when n is 1 and s is 'o'", () => {
    expect(stringRepeat(1, 'o')).toBe('o')
})

test("should return 'oo' when n is 2 ans s is 'o ", () => {
    expect(stringRepeat(2, 'o')).toBe('oo')
})

test("should return 'HelloHelloHelloHelloHello' when n is 5 and s is 'Hello'", () => {
    expect(stringRepeat(5, 'Hello')).toBe('HelloHelloHelloHelloHello')
})