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
  ]);
});

test("Gameboard receives attack and marks spot 1, 1", () => {
  gameboard.placeShip(ship1, 1, 1);
  gameboard.receiveAttack(1, 1);
  expect(gameboard.array[1][1]).toBe("X");
});

test("Gameboard places ships with lenght > 1", () => {
  const ship2 = shipFactory(2, false);
  gameboard.placeShip(ship2, 1, 1);
  expect(gameboard.array).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, 1, null, null, null, null, null, null, null, null],
    [null, 1, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test("Reversed ship is placed on X axis", () => {
  const shipReversed = shipFactory(3, true);
  gameboard.placeShip(shipReversed, 3, 3);
  expect(gameboard.array).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, 1, null, null, null, null, null, null, null, null],
    [null, 1, null, null, null, null, null, null, null, null],
    [null, null, null, 1, 1, 1, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test("Gameboard will not place ship if ship wont' fit on the board", () => {
  const shipz = shipFactory(3, true);
  gameboard.placeShip(shipz, 1, 9);
  console.log(gameboard.array);
  expect(gameboard.array).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, 1, null, null, null, null, null, null, null, null],
    [null, 1, null, null, null, null, null, null, null, null],
    [null, null, null, 1, 1, 1, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});
