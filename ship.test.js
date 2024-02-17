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