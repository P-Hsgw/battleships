import gameboardFactory from "../modules/gameboard";
const gameboard = gameboardFactory()

test("Gameboard places ship on correct coordinates", () =>{
    expect(gameboard()).toBe("YYY")
})

test("Gameboard receives attack and marks correct spot",() => {
    expect(gameboard()).toBe("XXX")
})