class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  pop(){
    let prevNode = this.findNode(this.length - 1)
    // console.log(prevNode);
    let poppableNode = prevNode.next
    prevNode.next = null
    return poppableNode;
  }

  findNode(n){
    let count = 1 
    let data = this.head
    while(data){
        if(count == n) break
        count++
        data = data.next
    }
    return data
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

  
}

let myStack = new Stack("CI_CD PipeLine");
myStack.push("Youtube-Treversy Media");
myStack.push("google Drive");

console.log(myStack.pop());
myStack.print();


//  Push --> T.C = O(1) & S.C = O(1)
//  Pop --> T.C = O(n) & S.C = O(1)
