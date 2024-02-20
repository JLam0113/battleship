const shipClass = require('./ship')

function Gameboard() {
    const rows = 10;
    const columns = 10;
    const board = [];

    const newBoard = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push('');
            }
        }
    }

    newBoard();

    const getBoard = () => board;

    const placeShip = (ship, coordinates) => {
        // Check if coordinates are empty
        coordinates.map((array) => {
            if(board[array[0]][array[1]] !== '') return
        })

        coordinates.map((array) => {
            board[array[0]][array[1]] = ship
        })
    }

    const receiveAttack = (row, column) => {

    }

    return { getBoard, placeShip, receiveAttack };

}

module.exports = { Gameboard }