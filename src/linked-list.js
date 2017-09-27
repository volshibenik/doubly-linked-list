const Node = require('./node');

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
    }
    append(data) {
      var newNode = new Node(data);
      var targetNode = this.head;
  
  //    console.log('newNex',newNode.next);
  
      if (!targetNode) {
        this.head = newNode;
        this.length++;
      } else {
  
        for (var i = 1; i < this.length; i++) {
          targetNode = targetNode.next;
        }
        targetNode.next = newNode;
        this.length++;
  
      }
  
    }

    head() {
    }

    tail() {
    }

    at(index) {
    }

    insertAt(index, data) {
    }

    isEmpty() {
    }

    clear() {
    }

    deleteAt(index) {
    }

    reverse() {
    }

    indexOf(data) {
    }
  
}






module.exports = LinkedList;
