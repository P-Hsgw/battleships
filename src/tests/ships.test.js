import shipFactory from "../modules/ships";

test("Ship factory accept length of ship", () => {
    expect(shipFactory(10)).toBeDefined
})

test("Ship factory counts hits", () => {
    const ship = shipFactory(10, false)
    ship.hit()
    expect(ship.timesHit).toBe(1)
})

