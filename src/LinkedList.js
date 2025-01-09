// this is a specialized implementation of a linked list used to manage the taskbar

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList {
  constructor(initialValues = []) {
    this.head = null;

    // If initialValues is provided, populate the linked list
    if (Array.isArray(initialValues) && initialValues.length > 0) {
      initialValues.forEach((value) => this.push_front(value));
      this.reverse(); // Reverse to maintain array order (since push_front adds to the front)
    }
  }

  // Adds a new node to the start of the list
  push_front(s) {
    const newNode = new Node(s);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Erases a node by value
  erase(s) {
    if (!this.head) return;

    if (this.head.value === s) {
      this.head = this.head.next;
      return;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current) {
      if (current.value === s) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  // Finds the index of the node with the specified value
  find(s) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === s) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1; // Return -1 if not found
  }

  // Helper method to reverse the linked list (used when initializing from an array)
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Helper method to convert the linked list to an array
  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }
}
  
  export default LinkedList;
  