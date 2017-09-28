const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
  
    }
		append(data) {
			var newNode = new Node(data);
			var targetNode = this._head;
	
	
			if (!targetNode) {
				this._head = newNode;
				this._tail = newNode;
				this.length++;
			} else {
	
				for (var i = 1; i < this.length; i++) {  
					targetNode = targetNode.next;   //flipping through the end
				}
				
				this._tail = newNode;
				targetNode.next = this._tail;
				this._tail.prev = targetNode;
	
				this.length++;
	
			}
	
		}

    head() {
			return this._head['data'];
    }

    tail() {
			return this._tail['data'];
    }

    at(index) {
			var targetNode = this._head;
			for (var i = 0; i < index; i++) {  
				targetNode = targetNode.next;   //flipping through the end
			}
			return targetNode['data'];
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
