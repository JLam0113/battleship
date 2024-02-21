const shipClass = require('./ship')

test('ship created', () => {
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
})

const gameboardClass = require('./gameboard')

test('gameboard', () => {
    let gameboard = gameboardClass.Gameboard()
    expect(gameboard.getBoard()[0][0]).toBe('')
})

test('ship placed', () => {
    let ship = shipClass.Ship(3)
    let gameboard = gameboardClass.Gameboard()
    gameboard.placeShip(ship, [[0,0],[0,1],[0,2]])
    expect(gameboard.getBoard()[0][0]).toBe(ship)
    expect(gameboard.getBoard()[0][1]).toBe(ship)
    expect(gameboard.getBoard()[0][2]).toBe(ship)
})

test('ship hit', () => {
    let ship = shipClass.Ship(3)
    let gameboard = gameboardClass.Gameboard()
    gameboard.placeShip(ship, [[0,0],[0,1],[0,2]])
    gameboard.receiveAttack(0, 0)
    //expect(gameboard.getBoard()[0][0].getHP()).toBe(2)
    // quick test to ensure you can't hit an already 'hit' spot
    expect(gameboard.getBoard()[0][0]).toBe('O')
})

test('hit missed', () => {
    let gameboard = gameboardClass.Gameboard()
    gameboard.receiveAttack(0, 0)
    expect(gameboard.getBoard()[0][0]).toBe('X')
})

test('all ships sunk', () => {
    let ship = shipClass.Ship(1)
    let gameboard = gameboardClass.Gameboard()
    gameboard.placeShip(ship, [[0,0]])
    let ship2 = shipClass.Ship(2)
    gameboard.placeShip(ship2, [[5,5],[6,5]])
    gameboard.receiveAttack(0, 0)
    gameboard.receiveAttack(5, 5)
    gameboard.receiveAttack(6, 5)
    expect(gameboard.gameOver()).toBe(true)
})

const gamecontrollerClass = require('./gamecontroller')

test('player turn', () => {
    let gamecontroller = gamecontrollerClass.GameController()
    gamecontroller.playRound(0,0)
    expect(gamecontroller.getAIBoard()[0][0]).toBe('O')
})

test.only('game loop', () => {
    let gamecontroller = gamecontrollerClass.GameController()
    gamecontroller.playRound(0,0)
    gamecontroller.playRound(1,0)
    expect(gamecontroller.getAIBoard()[1][0]).toBe('O')
    gamecontroller.playRound(9,7)
    gamecontroller.playRound(9,8)
    gamecontroller.playRound(9,9)
    expect(gamecontroller.getAIBoard()[0][0]).toBe('')
})