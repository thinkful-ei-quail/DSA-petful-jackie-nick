//look over but I think this is complete

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    if(this.stack1.length > 0) {
      return this.stack1[0]
    }
    return this.stack2[this.stack2.length -1]
  }
  
  all() {
    // Return all items in the queue.
    let array = []
    array.push(this._items.toString())
    return array
  }
}

module.exports = Queue;
