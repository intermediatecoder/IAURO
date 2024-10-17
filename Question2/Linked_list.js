/*Question 2
Question-Scenario:
You are a software developer at a logistics company. Your company 
maintains a system to track packages as they move through different 
stages of delivery. Each package's journey is represented as a linked list, 
where each node contains information about a stage in the delivery 
process.
Recently, some packages have been reported to be stuck in an infinite loop 
in the tracking system, causing delays and confusion. To prevent this, you 
need to implement a function to detect any structural issues in the package 
tracking system.
Problem Statement:
Given the head of a linked list representing the stages of a package's 
journey, you need to determine if there is a structural issue causing an 
infinite loop. */

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

