const {NotImplementedError} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


class ListNode {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }

    add(value) {
        if (this.value === null) {
            this.value = value
        } else {
            let lastNode = this.next;

            if (this.next === null){
                this.next = new ListNode (value)
            } else {
                while(lastNode.next !== null){
                    lastNode = lastNode.next;
                }
                lastNode.next = new ListNode (value)
            }



        }
    }
}

function removeKFromList(l, k) {

    let arrValues = []
    let currentObj = l

    do {
        if (currentObj.value !== k) {
            arrValues.push(currentObj.value)
        }
        currentObj = currentObj.next
    } while (currentObj !== null)


    const newNodeList = new ListNode()

    for (let i = 0; i < arrValues.length; i++) {
        newNodeList.add(arrValues[i])

    }
    console.debug(newNodeList)
        return newNodeList
}

module.exports = {
    removeKFromList
};
