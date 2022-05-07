const shipFactory = (shipLength) => {
    let timesHit = 0
    let shipHP = shipLength

    const hit = () => {
        obj.timesHit ++
        console.log("Ship has been hit")
    }

    const isSunk = () => {
        if (timesHit >= shipHP) {
            return true
        }
    }

    const obj = {shipLength, hit, timesHit, isSunk}
    return obj
}

export default shipFactory