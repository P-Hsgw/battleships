const gameboardFactory = () => {
  let array = [];

  const populateGameBoard = () => {
    // Create 2d 10x10 array filled with null
    obj.array = Array.from(Array(10), () => {
      return new Array(10).fill(null);
    });
  };

  // Place ship depending on ship length, isReverse and coordinates
  const placeShip = (ship, coordinateY, coordinateX) => {
    if (ship.isReversed) {
      if (coordinateX + ship.shipLength < obj.array.length) {
        for (let i = 0; i < ship.shipLength; i++) {
          obj.array[coordinateY][coordinateX + i] = 1;
        }
      } else {
        return;
      }
    } else {
      if (coordinateY + ship.shipLength < obj.array.length) {
        for (let i = 0; i < ship.shipLength; i++) {
          obj.array[coordinateY + i][coordinateX] = 1;
        }
      } else {
        return;
      }
    }
  };

  // Mark attacked spot
  const receiveAttack = (coordinateY, coordinateX) => {
    if ((obj.array[coordinateY][coordinateX] = 1)) {
      obj.array[coordinateY][coordinateX] = "X";
    } else {
      obj.array[coordinateY][coordinateX] = "*";
    }
    // Ship receives attack if clicked on coordinate
    // If coordinate of ship == attack coordinate, damage ship
    // Else mark the missed spot

    // If field is 1, mark it as damage for the ship
    // If field is null, mark it as X and not clickable

    // Damage to the ship marked with differen symbol than just miss
  };

  // Gameboard should check if all ships has been sunk

  let obj = { array, populateGameBoard, placeShip, receiveAttack };
  return obj;
};
export default gameboardFactory;
