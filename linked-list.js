import Node from './node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    // create a new node
    const newHead = new Node(data);

    // reference current head
    const currentHead = this.head;

    // reassign head to be new node
    this.head = newHead;

    // if there was a head, set new head's next node to be the old head
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    // current tail node
    let tail = this.head;

    // if there is no tail
    if (tail === null) {
      // set new node to be head instead of tail
      this.head = new Node(data);
    } else {
      // iterate through the list until we find the tail
      while (tail.getNextNode() !== null) {
        // reassign tail to be the next node
        tail = tail.getNextNode();
      }

      // set the current tail's next node to be the new node
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    // reference current head
    const removedHead = this.head;

    // if there is no head
    if (removedHead === null) {
      return;
    }

    // reassign head to be the current heads next node
    this.head = removedHead.getNextNode();

    // return the data of the removed head
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';

    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }

    output += '<tail>';
    console.log(output);
  }
}

export default LinkedList;
