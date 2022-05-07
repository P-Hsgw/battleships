import shipFactory from "../modules/ships";

test("Ship factory accept length of ship", () => {
    expect(shipFactory(10)).toBeDefined
})

test("Ship factory marks hit spot", () => {
    const ship = shipFactory(10)
    expect(ship.hit()
).toBe(true)
})