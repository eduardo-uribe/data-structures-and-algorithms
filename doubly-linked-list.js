import Node from './updated-node.js';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead() {
    const newHead = new Node(data);
    const currentHead = this.head;

    if (currentHead !== null) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }

    this.head = newHead;

    if (this.tail === null) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;

    if (currentTail !== null) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }

    this.tail = newTail;

    if (this.head === null) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;

    if (removedHead === null) {
      return;
    }

    this.head = removedHead.getNextNode();

    if (this.head !== null) {
      this.head.setPreviousNode(null);
    }

    if (removedHead === this.tail) {
      this.removeTail();
    }

    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;

    if (removedTail === null) {
      return;
    }

    this.tail = removedTail.getPreviousNode();

    if (this.tail !== null) {
      this.tail.setNextNode(null);
    }

    if (removedTail === this.head) {
      this.removeHead();
    }

    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }

      currentNode = currentNode.getNextNode();
    }

    if (nodeToRemove === null) {
      return null;
    }

    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();

      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }

    return nodeToRemove;
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

export default DoublyLinkedList;
