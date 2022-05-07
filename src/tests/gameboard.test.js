import gameboardFactory from "../modules/gameboard";
import shipFactory from "../modules/ships";

const gameboard = gameboardFactory()
gameboard.populateGameBoard()

const ship1 = shipFactory(1)

test("Gameboard populates itself", () =>{
    expect(gameboard.array).toStrictEqual([ 
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ])
})

test("The gameboard places a ship on 1, 1 field", () => {
    gameboard.placeShip(ship1, 1, 1)
    expect(gameboard.array).toStrictEqual([ 
        [null, null, null, null, null, null, null, null, null, null],
        [null, 1, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],        
    ])
})

test("Gameboard receives attack and marks correct spot", () => {
    gameboard.placeShip(ship1, 1, 1)
    gameboard.receiveAttack(1, 1)
    expect(gameboard.array[1][1]).toBe("X")
})