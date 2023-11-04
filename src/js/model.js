export default class TicTacToeModel {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
        this.playerXScore = 0;
        this.playerOScore = 0;
        this.isGameActive = true;
    }

    updateBoard(index) {
        if (this.isGameActive && this.board[index] === '') {
            this.board[index] = this.currentPlayer;
            return true;
        }
        return false;
    }

    handleUserAction(index) {
        if (this.model.checkWin()) {
            if (this.model.currentPlayer === 'X') {
                this.model.playerXScore++; 
            } else {
                this.model.playerOScore++;
            }
            this.view.updateScore(); 
            this.view.announceResult(this.model.currentPlayer === 'X' ? 'PLAYERX_WON' : 'PLAYERO_WON');
            this.model.isGameActive = false;
        }
    }

    

    checkWin() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return true;
            }
        }

        return false;
    }
}



  