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
    return node.data;
  }

  show(queue) {
    // Return the next item in the queue.
    return this.first.data
  }
  
  all(queue) {
    // Return all items in the queue.
    let array = []
    array.push(this.queue.toString())
    return array
    // console.log(this.data)
    // return this.data
  }
}

module.exports = Queue;
