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
			return this._head?  this._head['data'] : this._head;
    }

    tail() {
			return this._tail?  this._tail['data'] : this._tail;
    }

    at(index) {
			var targetNode = this._head;
			for (var i = 0; i < index; i++) {  
				targetNode = targetNode.next;   //flipping through the end
			}
			return targetNode['data'];
    }

    insertAt(index, data) {
			var targetNode = this._head;
			
			for (var i = 0; i < index; i++) {  
				targetNode = targetNode.next;   //flipping through the end
			}
			var newNode = new Node(data, targetNode.prev, targetNode);
			targetNode.prev.next = newNode;
			targetNode.prev = newNode;
			this.length++
    }

    isEmpty() {
			return this._head === null
    }

    clear() {
			this._head = null;
			this._tail = null;
			this.length = 0;
    }

    deleteAt(index) {
			var targetNode = this._head;

			for (var i = 0; i < index; i++) {  
				targetNode = targetNode.next;   //flipping through the end
			}
			
			targetNode.prev.next = targetNode.next;
			targetNode.next.prev = targetNode.prev;
			
			this.length--
    }

    reverse() {
    }

    indexOf(data) {
    }
  
}






module.exports = LinkedList;
