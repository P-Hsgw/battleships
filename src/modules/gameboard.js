const gameboardFactory = () => {
    let array = []

    const populateGameBoard = () => {
        obj.array = Array.from(Array(10), () => {
            return new Array(10).fill(0)
        })
    }

    const placeShip = (ship, coordinateX, coordinateY) => {
        obj.array[coordinateX][coordinateY] = 1
    }

    const receiveAttack = (coordinateX, coordinateY) => {
        // Ship receives attack if clicked on coordinate
        // If coordinate of ship == attack coordinate, damage ship
        // Else mark the missed spot
    }
    let obj = {array, populateGameBoard, placeShip}
    return obj
}
export default gameboardFactory