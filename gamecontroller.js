const gameboardClass = require('./gameboard')
const shipClass = require('./ship')

function GameController() {

    const players = [
        {
            name: 'Player One',
            board: gameboardClass.Gameboard()
        },
        {
            name: 'AI',
            board: gameboardClass.Gameboard(),
            moves: []
        }
    ];

    const generateShips = () => {
        players[0].board.placeShip(shipClass.Ship(3), [[8, 5], [8, 6], [8, 7]])
        players[0].board.placeShip(shipClass.Ship(2), [[3, 2], [4, 2]])
        players[1].board.placeShip(shipClass.Ship(2), [[0, 0], [1, 0]])
        players[1].board.placeShip(shipClass.Ship(3), [[9, 7], [9, 8], [9, 9]])
    }

    generateShips()

    const playAI = () => {
        let row = Math.floor(Math.random() * 10)
        let column = Math.floor(Math.random() * 10)
        if (players[1].moves.indexOf([row, column]) < 0) {
            players[1].moves.push([row, column])
            players[0].board.receiveAttack(row, column)
            playAI()
            return
        }
        else {
            playAI()
        }
    }

    const playRound = (row, column) => {
        if (players[1].board.receiveAttack(row, column)) {
            if (players[1].board.gameOver()) {
                resetGame()
                return
            }
            return
        }
        else {
            playAI()
            if (players[0].board.gameOver()) {
                resetGame()
                return
            }
        }
    }

    const resetGame = () => {
        players[0].board.newBoard()
        players[1].board.newBoard()
    }

    return {
        playRound,
        getPlayerBoard: players[0].board.getBoard,
        getAIBoard: players[1].board.getBoard,
        // Test purposes
        getPlayerGameOver: players[0].board.gameOver,
        getAIGameOver: players[1].board.gameOver
    }
}

module.exports = { GameController }