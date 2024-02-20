const shipClass = require('./ship')

/*test('ship created', () => {
    let ship = shipClass.Ship(2)
    expect(ship.getHP()).toBe(2)
})

test('ship hit', () => {
    let ship = shipClass.Ship(3)
    ship.hit()
    expect(ship.getHP()).toBe(2)
})

test('ship sunk', () => {
    let ship = shipClass.Ship(1)
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})*/

const gameboardClass = require('./gameboard')

test('ship placed', () => {
    let ship = shipClass.Ship(3)
    let gameboard = gameboardClass.Gameboard()
    gameboard.placeShip(ship, [[0,0],[0,1],[0,2]])
    expect(gameboard.getShip(0, 0)).toBe(ship)
    expect(gameboard.getShip(0, 1)).toBe(ship)
    expect(gameboard.getShip(0, 2)).toBe(ship)
})

test('ship hit', () => {
    let ship = shipClass.Ship(3)
    let gameboard = gameboardClass.Gameboard()
    gameboard.placeShip(ship, [[0,0],[0,1],[0,2]])
    gameboard.receiveAttack(0, 0)
    expect(gameboard.getBoard()[0, 0].getHP()).toBe(2)
    // quick test to ensure you can't hit an already 'hit' spot
    expect(gameboard.receiveAttack(0, 0)).toBe(false)
})

test('hit missed', () => {
    let gameboard = gameboardClass.Gameboard()
    gameboard.receiveAttack(0, 0)
    expect(gameboard.getBoard()[0, 0].toBe('X'))
})

test('all ships sunk'), () => {
    let ship = shipClass.Ship(1)
    let gameboard = gameboardClass.Gameboard()
    gameboard.placeShip(ship, [[0,0]])
    gameboard.receiveAttack(0, 0)
    expect(gameboard.gameOver()).toBe(true)
}