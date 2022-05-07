const gameboardFactory = () => {
    let array = [];

    const populateGameBoard = () => {
        obj.array = [ 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]
    }

    const placeShip = (ship, coordinateX, coordinateY) => {
        array[coordinateX, coordinateY] = 1
    }

    const receiveAttack = (coordinateX, coordinateY) => {
        // Ship receives attack if clicked on coordinate
        // If coordinate of ship == attack coordinate, damage ship
        // Else mark the missed spot
    }
    let obj = {array, populateGameBoard}
    return obj
}

export default gameboardFactory