const shipFactory = (length) => {
    let timesHit = 0

    const hit = () => {
        obj.timesHit ++
        console.log("Ship has been hit")
    }

    const isSunk = () => {
        if (timesHit >= length) {
            return true
        }
    }
    const obj = {length, hit, timesHit}
    return obj
}

export default shipFactory