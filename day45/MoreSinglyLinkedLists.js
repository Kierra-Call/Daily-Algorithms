/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         *
         * @type {ListNode|null}
         */
        this.next = null;
    }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        /** @type {ListNode|null} */
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
        // if (this.head === null)
        //     return true

        // return false
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        const newNode = new ListNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }

        let runner = this.head;

        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newNode;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) {
        if (runner.next === null) {
            runner.next = new ListNode(data);
            return;
        }

        this.insertAtBackRecursive(data, runner.next);
    }

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of the list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        const newHead = new ListNode(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        const oldHead = this.head;
        this.head = this.head.next;
        return oldHead.data;
    }

    /**
     * Calculates the average of this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        let sum = 0;
        let count = 0;
        let runner = this.head;

        while (runner) {
            count++;
            sum += runner.data;
            runner = runner.next;
        }
        return sum / count;
    }
    /**
     * Removes the last node of this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        // Your code here!
        // Note: Be sure to handle any edge cases and to return the data of the node we've removed.
        //start by creating a runner to find the tail of the list
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.next == null) {
            return this.removeHead();
        }
        let runner = this.head;

        while (runner.next.next != null) {
            runner = runner.next;
        }
        let removedData = runner.next;
        runner.next = null;
        return removedData.data;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        // Your code here!
        let runner = this.head;
        while (runner) {
            if (runner.data == val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(n) linear due to the call stack.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        // Your code here!
        if (current == null) {
            return false;
        }
        if (current.data == val) {
            return true;
        }

        return this.containsRecursive(val, current.next);
    }
    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if (this.isEmpty() || this.head.next == null) {
            return null
        }
        let runner = this.head;

        while (runner.next.next != null) {
            runner = runner.next
        }
        return runner.data
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        if (val == this.head.data) {
            this.removeHead();
            return true
        }
        let runner = this.head
        while (runner.next !== null) {
            if (runner.next.data == val){
                runner.next = runner.next.next
                return true
            }
            runner = runner.next
        }
        return false
    }

    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) {
        if (this.isEmpty()) {
            return false
        }
        if (newVal == this.head.data) {
            this.insertAtFront(targetVal);
        }
        let runner = this.head
        while (runner.next !== null) {
            if (runner.next.data == targetVal) {
                const newNode = new ListNode(newVal)
                newNode.next = runner.next
                runner.next = newNode
                return true
            }
            runner = runner.next
        }
        return false
    }
}

// *******************************************************************
// Test Code Here ~ ☕
const list = new SinglyLinkedList();

list.insertAtBackMany([1,2,3,4,5])
// console.log(list.toArr())
// list.removeHead()
// console.log(list.toArr())
// list.insertAtFront(9)
console.log(list.toArr())
// console.log(list.average())
console.log(list.removeVal(4))
console.log(list.toArr())
console.log(list.prepend(9, 3))

