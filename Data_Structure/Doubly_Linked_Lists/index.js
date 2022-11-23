class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let target = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = target.prev;
      this.tail.next = null;
      target.prev = null;
    }
    this.length--;
    return target;
  }

  shift() {
    if (!this.head) return undefined;
    let target = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = target.next;
      this.head.prev = null;
      target.next = null;
    }
    this.length--;

    return target;
  }

  unshfit(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshfit(value);
      return false;
    }
    if (index === this.length) {
      this.push(value);
      return false;
    }
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let target = this.get(index);
    let beforeNode = target.prev;
    let afterNode = target.next;
    afterNode.prev = beforeNode;
    beforeNode.next = afterNode;
    target.prev = null;
    target.next = null;

    this.length--;
    return target;
  }
}
