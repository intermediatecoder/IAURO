

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}


function detectLoop(head) {
  let slow = head;
  let fast = head;

  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) {
      return true;
    }
  }

  return false;
}


function list1() {
    let head = new Node(20);
    head.next = new Node(30);
    head.next.next = new Node(40);
    head.next.next.next = new Node(60);
    head.next.next.next.next = new Node(80);

    head.next.next.next.next.next = head.next; 

    return detectLoop(head);
}

function list2() {
    let head = new Node(20);
    head.next = new Node(30);
    head.next.next = new Node(40);
    head.next.next.next = new Node(60);

    return detectLoop(head);
}

if (list1()) {
    console.log("true"); 
}
 else {
    console.log("false");
}

if (list2()) {
    console.log("true");
}
 else {
    console.log("false");  
}

