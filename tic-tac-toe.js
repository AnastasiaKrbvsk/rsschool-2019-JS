class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.player_symbol = 'x';
    }

    // should return x or o
    getCurrentPlayerSymbol() {
        return this.player_symbol;
    }
    //should properly update class state (change current player, update marks storage etc.)
    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.player_symbol;
            if (this.player_symbol === 'x') {
                this.player_symbol = 'o';
            } else {
                this.player_symbol = 'x';
            }
        }
    }
    // should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }
    //should return winner symbol (x or o) or null if there is no winner yet
    getWinner() {
        let winner = null;
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]) {
                winner = this.matrix[i][0];
            }
        }
        for (let j = 0; j < this.matrix.length; j++) {
            if (this.matrix[0][j] === this.matrix[1][j] && this.matrix[1][j] === this.matrix[2][j]) {
                winner = this.matrix[0][j];
            }
        }
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
            winner = this.matrix[0][0];
        }
        if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
            winner = this.matrix[0][2];
        }
        return winner;
    }
    //should return true if there is no more fields to place a x or o
    noMoreTurns() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === null) {
                    return false;
                } 
            }
        }
        return true;
    }
    //should return true if there is no more turns and no winner
    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
            return false;
        }

    }
    //should return matrix[row][col] value (if any) or null
    getFieldValue(rowIndex, colIndex) {
        if (!this.matrix[rowIndex][colIndex]) {
            return null;
        }
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;