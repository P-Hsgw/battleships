const shipFactory = (length) => {
    function hit() {
        return true
    }

    return {length, hit}
}
const ship = shipFactory(10)
console.log(ship.length)

export default shipFactory