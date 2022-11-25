class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.legth) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root;

    while (current && !found) {
      if ((value = current.value)) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  // BreathFirstSearch 너비 우선 탐색
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.pop(node.left);
      if (node.right) queue.pop(node.right);
    }
    return data;
  }
  //DeapthFirstSearch 깊이 우선 탐색

  //전위 순회
  // 트리를 복사 하거나 평탄화 하는 경우  사용하기 좋음, 구조가 그대로
  DFSPreOder() {
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);

    return data;
  }
  //후위 순회
  // 
  DFSPostOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };

    traverse(this.root);

    return data;
  }
  // 정위 순회
  // 모든 노드가 정렬된 상태로 나오게 됨
  DFSInOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return data;
  }
}

// 