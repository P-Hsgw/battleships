const gameboardFactory = () => {
    let array = []

    const populateGameBoard = () => {
        obj.array = Array.from(Array(10), () => {
            return new Array(10).fill(null)
        })
    }

    const placeShip = (ship, coordinateX, coordinateY) => {
        obj.array[coordinateX][coordinateY] = 1
        // Check ship length, and iterate over the arr to place as many fields as possible
        // If ship is reversed, change the loop
    }

    const receiveAttack = (coordinateX, coordinateY) => {
        if (obj.array[coordinateX][coordinateY] = 1) {
            console.log("sinked")
            obj.array[coordinateX][coordinateY] = "X"
        } else {
            console.log("missed")
            obj.array[coordinateX][coordinateY] = "X"
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