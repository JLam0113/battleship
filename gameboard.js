const shipClass = require('./ship')

function Gameboard() {
    const rows = 10;
    const columns = 10;
    const board = [];
    const ships = [];

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
        ships.push(ship)
    }

    const receiveAttack = (row, column) => {
        if (board[row][column] == 'X' || board[row][column] == '' ) {
            board[row][column] = 'X'
        }
        else {
            board[row][column].hit()
            board[row][column] = 'O'
        }
    }

    const gameOver = () => {
        for ( ship of ships ) {
            if(!ship.isSunk()) return false;
        }
        return true;
    }

    return { getBoard, placeShip, receiveAttack, gameOver };

}

module.exports = { Gameboard }