const shipFactory = (shipLength, isReversed) => {
    let timesHit = 0
    let shipHP = shipLength

    const hit = () => {
        obj.timesHit ++
    }

    const isSunk = () => {
        if (timesHit >= shipHP) {
            return true
        }
    }

    const obj = {shipLength, hit, timesHit, isSunk, isReversed}
    return obj
}

export default shipFactory