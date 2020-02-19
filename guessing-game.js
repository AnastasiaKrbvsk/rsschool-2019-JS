class GuessingGame {
    constructor() {
        this.maximum = null;
        this.minimum = null;
        this.guessedNum = null;
    }

    setRange(min, max) {
        this.maximum = max;
        this.minimum = min;
    }

    guess() {
        this.guessedNum = Math.ceil((this.maximum + this.minimum) / 2);
        return this.guessedNum
    }

    lower() {
        this.maximum = this.guessedNum;
    }

    greater() {
        this.minimum = this.guessedNum;
    }
}

module.exports = GuessingGame;
