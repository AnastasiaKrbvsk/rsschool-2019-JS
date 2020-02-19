class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this._config = config;
        this._state = config.initial;
        this._canceled = [];
        this._history = [];
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this._state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (!(state in this._config.states)) {
            throw Error('There is no such state');
        } else {
            this._history.push(this._state);
            this._state = state;
            this._canceled = [];
        }
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        if (!(event in this._config.states[this._state].transitions)) {
            throw Error('There is no such state');
        } else {
            this.changeState(this._config.states[this._state].transitions[event]);
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this._state = this._config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        let array = [];
        if (event) {
            for (let state in this._config.states)
                if (event in this._config.states[state].transitions) {
                array.push(state);
                }
        } else {
            for (let state in this._config.states)
                array.push(state);
        }
        return array;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if (this._history.length == 0) {
            return false;
        } else {
            this._canceled.push(this._state);
            this._state = this._history.pop();
            return true;
        }
        
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        if (this._canceled.length == 0) {
            return false;
        } else {
            this._history.push(this._state);
            this._state = this._canceled.pop();
            return true;
        }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this._canceled = [];
        this._history = [];
    }
}

module.exports = FSM;
