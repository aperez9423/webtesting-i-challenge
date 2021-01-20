const enhancer = require('./enhancer.js');
// test away!

it("enchantment succeeds", () =>{
    expect(enhancer.success({
        name: "Bow and Arrow",
        enhancement: 6,
        durability: 20
    })).toEqual({
        name: "Bow and Arrow",
        enhancement: 7,
        durability: 20
    })
})

it("enchantment succeeds with 20 enchatment", () =>{
    expect(enhancer.success({
        name: "Bow and Arrow",
        enhancement: 20,
        durability: 20
    })).toEqual({
        name: "Bow and Arrow",
        enhancement: 20,
        durability: 20
    })
})

it("repairs item", () => {
    expect(enhancer.repair({
        name: "Bow and Arrow",
        enhancement: 6,
        durability: 10
    })).toEqual({
        name: "Bow and Arrow",
        enhancement: 6,
        durability: 100
    })
})

it("enhancement fails less than 15 decrease by 5", () => {
    expect(enhancer.fail({
        name: "Bow and Arrow",
        enhancement: 6,
        durability: 50
    })).toEqual({
        name: "Bow and Arrow",
        enhancement: 6,
        durability: 45
    })
})

it("enhancement fails 15 or more decrease by 10", () => {
    expect(enhancer.fail({
        name: "Bow and Arrow",
        enhancement: 15,
        durability: 50
    })).toEqual({
        name: "Bow and Arrow",
        enhancement: 15,
        durability: 40
    })
})

it("enhancement fails 16 or more decrease enhancement by 1", () => {
    expect(enhancer.fail({
        name: "Bow and Arrow",
        enhancement: 17,
        durability: 60
    })).toEqual({
        name: "Bow and Arrow",
        enhancement: 16,
        durability: 50
    })
})