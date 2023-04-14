const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  constructor(name){
    this.name = []
  }

  push(element) {
    this.name.push(element)
  }

  pop() {
  let temp = this.name[this.name.length - 1]
    this.name.splice(this.name.length - 1, 1)
    console.debug(this.name[this.name.length - 1])
    console.debug('pop:' + temp)
    return temp
  }

  peek() {
    // console.debug(this.name)
    // console.debug(this.name[this.name.length - 1])
    console.debug('peek ' + this.name[this.name.length - 1])
    return this.name[this.name.length - 1]
  }
}

module.exports = {
  Stack
};
