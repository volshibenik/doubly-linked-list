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
      
      return this;
      
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
      
      if (!this._head) {

        this.append(data);
        return this;

      }

      var targetNode = this._head;

      for (var i = 0; i < index; i++) {  
        targetNode = targetNode.next;   
      }
      var newNode = new Node(data, targetNode.prev, targetNode);
      targetNode.prev.next = newNode;
      targetNode.prev = newNode;
      this.length++;

      return this;
      
    }

    isEmpty() {
			return this._head === null
    }

    clear() {
      
			this._head = null;
			this._tail = null;
			this.length = 0;
      
      return this;
      
    }

    deleteAt(index) {
      
      if (this.length === 1) {

        this.clear();
        return this;

      } else if (index === 0) {

        this._head = this._head.next;

        this._head? this._head.prev = null : null;

      } else if (index === this.length-1) {

        this._tail = this._tail.prev;
        this._tail? this._tail.next = null : null;

      } else {

        var targetNode = this._head;
        
        for (var i = 0; i < index; i++) {  
          targetNode = targetNode.next;   
        }

        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;

      }

      this.length--;

      return this;
      
    }

    reverse() {
      
      var snake = this._tail,
          pre = null,
          nex = snake.prev;

      for (var i = 0; i < this.length; i++) {
        snake.next = nex;
        snake.prev = pre;

        pre = snake;
        snake = nex;
        nex = snake? snake.prev : null;

      }
      
      pre = this._tail;
      nex = this._head;

      this._head = pre;
      this._tail = nex;
      
      return this;
      
    }

    indexOf(data) {
      
      var targetNode = this._head;
      for (var i = 0; i < this.length; i++) {
        if (targetNode['data'] === data) {
          return i
        }
        targetNode = targetNode.next;   //flipping through the end
      }
      return -1;
      
    }
  
}






module.exports = LinkedList;
