class Node {
    constructor(value, next = null, prev = null) {
      this.value = value;
      this.prev = null
      this.next = next;
    }
  }
  
  class Deque{
    constructor(value) {
      let node = new Node(value);
      this.head = node;
      this.tail = node;
      this.length = 1;
    }

    insertFront(value){
        let node = new Node(value)
        node.next = this.head
        this.head = node 
        node.next.prev = this.head
      this.length++;

    }
  
    insertback(value) {
      let node = new Node(value);
      node.prev = this.tail
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  
    removeFront(){
      let removableNode = this.head;
      this.head = this.head.next;
      this.length--
      return removableNode;
    }

    removeBack(){
      this.tail = this.tail.prev
      this.length--
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
  

 let deque = new Deque(10)


 deque.insertFront(5)

 deque.insertback(20)

 deque.insertback(30)
//  deque.removeFront()

 deque.removeBack()
 

  
 deque.print()