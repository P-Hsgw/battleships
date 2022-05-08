import gameboardFactory from "../modules/gameboard";
import shipFactory from "../modules/ships";

const gameboard = gameboardFactory();
gameboard.populateGameBoard();

const ship1 = shipFactory(1, false);

test("Gameboard populates itself", () => {
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
  ]);
});

test("The gameboard places a ship on 1, 1 field", () => {
  gameboard.placeShip(ship1, 1, 1);
  expect(gameboard.array[1][1]).toBe(1)
});

test("Gameboard places ships with lenght > 1", () => {
  const ship2 = shipFactory(2, false);
  gameboard.placeShip(ship2, 1, 1);
  expect(gameboard.array[1][1]).toBe(1);
  expect(gameboard.array[2][1]).toBe(1);
});

test("Reversed ship is placed on X axis", () => {
  const shipReversed = shipFactory(3, true);
  gameboard.placeShip(shipReversed, 3, 3);
  expect(gameboard.array[3][3]).toBe(1);
  expect(gameboard.array[3][4]).toBe(1);
  expect(gameboard.array[3][5]).toBe(1);
});

test("Gameboard will not place ship if ship wont' fit on the board", () => {
  const shipz = shipFactory(3, true);
  gameboard.placeShip(shipz, 1, 9);
  expect(gameboard.array[1][9]).toBe(null);
});

// test("Gameboard receives attack and marks spot 1, 1", () => {
//     gameboard.receiveAttack(1, 1);
//     console.log(gameboard.array);
//     expect(gameboard.array[1][1]).toBe("X");
//   });

//   test("Gameboard receives missed and marks spot 2, 2", () => {
//     gameboard.receiveAttack(2, 2);
//     console.log(gameboard.array);
//     expect(gameboard.array[2][2]).toBe("*");
//   });