export default class TicTacToeView {
  constructor(model) {
    this.model = model;

      this.squares = Array.from(document.querySelectorAll('.square'));
      this.playerDisplay = document.querySelector('.display-player');
      this.resetButton = document.querySelector('#reset');
      this.announcer = document.querySelector('.announcer');
      this.playerXScoreDisplay = document.querySelector('.playerX-score');
      this.playerOScoreDisplay = document.querySelector('.playerO-score');
    //   this.playerXScore; 
    //   this.playerOScore;
     
  }

  init() {
    console.log('this.model',this.model)
    // this.playerXScore = this.model.playerXScore; 
    // this.playerOScore = this.model.playerOScore;
    this.updateScore();
  }

  updateSquare(index, currentPlayer) {
    console.log('here')
      this.squares[index].innerText = currentPlayer;
      this.squares[index].classList.add(`player${currentPlayer}`);
    //   this.playerXScoreDisplay.innerText = 1;//this.playerXScore;
    //   this.playerOScoreDisplay.innerText = this.playerOScore;
  }

  updatePlayerDisplay(currentPlayer) {
      this.playerDisplay.classList.remove(`player${this.playerDisplay.innerText}`);
      this.playerDisplay.innerText = currentPlayer;
      this.playerDisplay.classList.add(`player${currentPlayer}`);
  }

  updateScore() {
      this.playerXScoreDisplay.innerText = this.model.playerXScore;
      this.playerOScoreDisplay.innerText = this.model.playerOScore;
  }

  addClickListener(callback) {
      this.squares.forEach((square, index) => {
          square.addEventListener('click', () => callback(index));
      });
  }

  addResetClickListener(callback) {
      this.resetButton.addEventListener('click', callback);
  }

  announceResult(type) {
      this.announcer.classList.remove('hide');
      switch (type) {
          case 'PLAYERO_WON':
              this.announcer.innerHTML = 'Player <span class="playerO">O-</span> Won';
              break;
          case 'PLAYERX_WON':
              this.announcer.innerHTML = 'Player <span class="playerX">X-</span> Won';
              break;
          case 'TIE':
              this.announcer.innerText = 'Tie';
              break;
      }
      this.init();

    //   console.log()
  }
}
