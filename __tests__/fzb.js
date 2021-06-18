const fizzbuzzfunc = require("../fizzbuzz.js")


describe ("multipleOf3And5", () => {
    let fizzbuzz = fizzbuzzfunc.fizzbuzz;
    test
    
    test("testingMod15", () => {
        let result = fizzbuzz(30);
        expect(result).toEqual("fizzbuzz")
    })
    test("testingMod3", () => {
        let result = fizzbuzz(6);
        expect(result).toEqual("fizz")
    })
    test("testingMod5", () => {
        let result = fizzbuzz(10);
        expect(result).toEqual("buzz")
    })
    test("testingother", () => {
        let result = fizzbuzz(7);
        expect(result).toEqual(7)
    })
})