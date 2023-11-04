export default class TicTacToeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.view.addClickListener(this.handleUserAction.bind(this));
        this.view.addResetClickListener(this.handleResetBoard.bind(this));
    }

    handleUserAction(index) {
        if (this.model.isGameActive) {
            if (this.model.updateBoard(index)) {
                this.view.updateSquare(index, this.model.currentPlayer);
                if (this.model.checkWin()) {
                    console.log("WINNER",this.model.currentPlayer )
                    if (this.model.currentPlayer === 'X') {
                        
                        this.model.playerXScore++; 
                    console.log("WINNER X => ",this.model.playerXScore )

                    } else {
                        this.model.playerOScore++;
                    }
                    this.view.updateScore(); 
                    this.view.announceResult(this.model.currentPlayer === 'X' ? 'PLAYERX_WON' : 'PLAYERO_WON');
                    this.model.isGameActive = false;
                } else if (!this.model.board.includes('')) {
                    this.view.announceResult('TIE');
                } else {
                    this.model.currentPlayer = this.model.currentPlayer === 'X' ? 'O' : 'X';
                    this.view.updatePlayerDisplay(this.model.currentPlayer);
                }
            }
        }
    }

    // handleUserAction(index) {
    //     if (this.model.isGameActive) {
    //         if (this.model.updateBoard(index)) {
    //             this.view.updateSquare(index, this.model.currentPlayer);
    //             if (this.model.checkWin()) {
    //                 this.view.announceResult(this.model.currentPlayer === 'X' ? 'PLAYERX_WON' : 'PLAYERO_WON');
    //                 this.model.isGameActive = false;
    //             } else if (!this.model.board.includes('')) {
    //                 this.view.announceResult('TIE');
    //             } else {
    //                 this.model.currentPlayer = this.model.currentPlayer === 'X' ? 'O' : 'X';
    //                 this.view.updatePlayerDisplay(this.model.currentPlayer);
    //             }
    //         }
    //     }
    // }

    handleResetBoard() {
        this.model.board = ['', '', '', '', '', '', '', '', ''];
        this.model.isGameActive = true;
        this.view.announcer.classList.add('hide');

        if (this.model.currentPlayer === 'O') {
            this.model.currentPlayer = 'X';
        }

        this.view.squares.forEach((square, index) => {
            square.innerText = '';
            square.classList.remove('playerX', 'playerO');
        });
    }
}
