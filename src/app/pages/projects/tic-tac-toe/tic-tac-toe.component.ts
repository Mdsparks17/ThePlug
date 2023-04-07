import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  // 0 = none; 1 = X; 2 = O
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  isPlayersTurn = true;
  turn = 0;
  gameState = "Your Turn";
  emote = "Tic-Tac-Toe?";

  constructor() { }

  ngOnInit(): void { }

  playerAction(i: number, j: number) {

    if (!this.isPlayersTurn) { return; }

    if (this.board[i][j] == 0) {
      this.board[i][j] = 1;
      this.updateGameState();
    }

  }

  cpuAction() {
    if (this.emote == "NYAAAA!!!") {
      let i = Math.floor(Math.random() * (3));
      let j = Math.floor(Math.random() * (3));
      if (this.board[i][j] == 0) {
        this.board[i][j] = 2;
        this.emote = "Your Move"
        this.updateGameState();
      } else {
        this.cpuAction();
      }
    } else {
      let move = null;
      // // Look if cpu can win
      move = this.lookForAWin(2)
      if (move != null) {
        this.board[move[0]][move[1]] = 2;
        this.emote = "Ez dub"
      } else {
        //   // Look if the cpu can prevent a player win
        move = this.lookForAWin(1);
        if (move != null) {
          this.board[move[0]][move[1]] = 2;
          this.emote = "Not so Fast!";
          this.updateGameState();
        } else {
          // Take the center
          if (this.board[1][1] == 0) {
            this.board[1][1] = 2;
            this.emote = "Pathetic";
            this.updateGameState();
          } else {
            // Random Move
            let i = Math.floor(Math.random() * (3));
            let j = Math.floor(Math.random() * (3));
            if (this.board[i][j] == 0) {
              this.board[i][j] = 2;
              this.emote = "Your Move"
              this.updateGameState();
            } else {
              this.cpuAction();
            }
          }
        }
      }
    }
  }

  async updateGameState() {
    this.turn++;

    this.isPlayersTurn = !this.isPlayersTurn;
    if (this.isPlayersTurn) {
      if (this.checkIfWin()) {
        this.gameState = "You Lose!";
        this.emote = "Ez dub";
      } else {
        if (this.turn >= 9) {
          this.gameState = "Draw"
          this.emote = "Try Again?"
        } else {
          this.gameState = "Your Turn";
        }
      }
    } else {
      if (this.checkIfWin()) {
        this.gameState = "You Win!";
        this.emote = "*Devastated*"
      } else {
        if (this.turn >= 9) {
          this.gameState = "Draw"
          this.emote = "Try Again?"
        } else {
          this.gameState = "CPU's Turn"
          await new Promise(f => setTimeout(f, 500));
          this.cpuAction();
        }
      }
    }
  }

  // Functionality
  checkIfWin() {
    let isWin: boolean = false;
    for (let i = 0; i <= 2; i++) {
      isWin = this.winVerify(this.board[i][0], this.board[i][1], this.board[i][2]) || isWin;
      isWin = this.winVerify(this.board[0][i], this.board[1][i], this.board[2][i]) || isWin;
    }
    isWin = this.winVerify(this.board[0][0], this.board[1][1], this.board[2][2]) || isWin;
    isWin = this.winVerify(this.board[0][2], this.board[1][1], this.board[2][0]) || isWin;
    return isWin;
  }

  winVerify(x: number, y: number, z: number) { return ((x == y && y == z && x + y + z != 0) ? true : false) }

  lookForAWin(mark: number) {
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        if (this.board[i][j] == 0) {
          this.board[i][j] = mark;
          if (this.checkIfWin()) {
            this.board[i][j] = 0;
            return [i, j];
          } else {
            this.board[i][j] = 0;
          }
        }
      }
    }
    return null;
  }

  reset() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    this.isPlayersTurn = true;
    this.turn = 0;
    this.gameState = "Your Turn";
    this.emote = "Tic-Tac-Toe?";

  }

  necoAttacked() {
    this.emote = "NYAAAA!!!"
  }

}
