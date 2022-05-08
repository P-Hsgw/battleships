const gameboardFactory = () => {
    let array = []

    const populateGameBoard = () => {
        obj.array = Array.from(Array(10), () => {
            return new Array(10).fill(null)
        })
    }

    const placeShip = (ship, coordinateY, coordinateX) => {
        // If ship is reversed, change the loop
        for (let i=0; i<ship.shipLength; i++) {
            obj.array[coordinateY+i][coordinateX] = 1
        }
    }

    const receiveAttack = (coordinateY, coordinateX) => {
        if (obj.array[coordinateY][coordinateX] = 1) {
            obj.array[coordinateY][coordinateX] = "X"
        } else {
            obj.array[coordinateY][coordinateX] = "X"
        }
        // Ship receives attack if clicked on coordinate
        // If coordinate of ship == attack coordinate, damage ship
        // Else mark the missed spot

        // If field is 1, mark it as damage for the ship
        // If field is null, mark it as X and not clickable
    }
    let obj = {array, populateGameBoard, placeShip, receiveAttack}
    return obj
}
export default gameboardFactory