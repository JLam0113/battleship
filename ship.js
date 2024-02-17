function Ship(length) {
    let hp = length
    let hits = 0

    const hit = () => hits++

    const isSunk = () => {
        if(hits >= hp)return true
        return false
    }

    const getHP = () => hp-hits

    return {
        hit,
        isSunk,
        getHP
    };
}

module.exports = { Ship }