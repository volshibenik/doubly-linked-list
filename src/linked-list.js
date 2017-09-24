const Node = require('./node');

class LinkedList {
    constructor() {
      this.body = [];
    }

    append(data) {
      this.body.push(data)
    }

    head() {
      return this.body[0]
    }

    tail() {
      return this.body[this.body.length-1]
    }

    at(index) {
      return this.body[index]
    }

    insertAt(index, data) {
      this.body.splice(index, 0, data);
    }

    isEmpty() {
      return !this.body.length? true:false
    }

    clear() {
     // this.body.splice(0, this.body.length);
    }

    deleteAt(index) {
      this.body.splice(index, 1);
    }

    reverse() {
      this.body.reverse();
    }

    indexOf(data) {
      return this.body.indexOf(data)
    }
  
    get length() {
        return this.body.length;
      }
}






module.exports = LinkedList;
