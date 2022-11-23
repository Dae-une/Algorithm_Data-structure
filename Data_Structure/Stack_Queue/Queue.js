class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.head) return null;

    if (size === 1) {
      this.tail = null;
    }
    let target = this.head;
    this.head = target.next;

    this.size--;

    return target.value;
  }
}
