// Question 2: Stacks & Queues
// Implement a Stack and a Queue data structure in Javascript.
//
// Explain the difference between a stack and a queue.
// Write a Javascript constructor called Stack and another Javascript class called Queue.
// Each should have a prototype method, add, that adds an element to the stack or queue and returns it.
// Each should have a prototype method, remove, that removes an element from the stack or queue and returns it.
// Make sure that each constructor/class behaves properly as per definitions of stacks and queues.

// An Stack means the first in is the last out
// A Queue means the first in is th first out


class Stack {
  constructor () {
    this.object = [];
  }
  add (num) { return this.object.push(num);  }
  remove () {  return this.object.pop(); }
  visualize() {return this.object}
}


class Queue {
  constructor () {
    this.object = [];
  }
  add (num) { return this.object.push(num); }
  remove () {  return this.object.shift(); }
  visualize() { return this.object }
}


let stack_new = new Stack();
stack_new.add(1);
stack_new.add(2);
stack_new.add(3);
stack_new.remove();
stack_new.visualize();



let queue_new = new Queue();
queue_new.add(1);
queue_new.add(2);
queue_new.add(3);
queue_new.remove();
queue_new.visualize();
