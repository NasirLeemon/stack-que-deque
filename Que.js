class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Que {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  enqueue(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  dequeue() {
    let removableNode = this.head;
    this.head = this.head.next;
    return removableNode;
  }

  findNode(n) {
    let count = 1;
    let data = this.head;
    while (data) {
      if (count == n) break;
      count++;
      data = data.next;
    }
    return data;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
}

let que = new Que(10);
que.enqueue(20);
que.enqueue(30);
que.enqueue(40);
que.enqueue(50);

que.dequeue()


que.print();

//  enqueue --> T.C = O(1) & S.C = O(1)
//  dequeue --> T.C = O(1) & S.C = O(1)
