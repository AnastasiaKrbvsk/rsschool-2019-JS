const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let tmp = this._head;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        return tmp.data;
    }

    insertAt(index, data) {
        let i = 1;
        let added = new Node(data);
        let tmp = this._head;
        while (tmp != null) {
            tmp = tmp.next;
            if (i == index) {
                tmp.prev.next = added;
                added.prev = tmp.prev;
                added.next = tmp;
                tmp.prev = added;
                this.length++;
            }
            i++;
        }
        return this;
    }

    isEmpty() {
        if (this.length == 0) return true;
        else return false;
    }

    clear() {
        this._head = new Node;
        this._tail = this._head;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let i = 0;
        let tmp = this._head;
        while (i !== index) {
            tmp = tmp.next;
            i++;
        }
        if (tmp == this._tail && tmp == this._head) {
            this._head = new Node;
            this._tail = this._head;
            this.length = 0;
            return this;
        }
        if ( tmp == this._head ) {
            this._head = this._head.next;
            this._head.prev = null;
        } else if (tmp == this._tail) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            tmp.next.prev = tmp.prev;
            tmp.prev.next = tmp.next;
        }
        this.length--;
        return this;
    }

    reverse() {
        let tmp = this._head;
        let prev_elem = null;
        let i = 0;
        while (i != this.length ) {
            let next_elem = tmp.next;
            tmp.next = prev_elem;
            tmp.prev = next_elem;
            prev_elem = tmp;
            tmp = next_elem;
            i++
        }
        let tail = this._tail;
        this._tail = this._head;
        this._head = tail;
        return this;
    }

    indexOf(data) {
        let tmp = this._head;
        for (let i = 0; i < this.length; i++) {
            if (tmp.data == data) {
                return i;
            }
            tmp = tmp.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
