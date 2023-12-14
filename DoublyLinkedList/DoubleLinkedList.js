/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        // Create a Node and we want to insert a new head for our list.
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(1) constant. No loop is needed since we have direct access to
     *    the tail.
     * - Space: O(1) constant.
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        // Create a Node and we want to insert a new tail for our list.
    }

    /**
     * Removes the middle node in this list.
     * - Time: O(0.5n) -> O(n) linear, n = list length.
     *    Since it's not constant we simplify it to O(n). Without the early
     *    exists, it would not be 0.5n.
     * - Space: O(1) constant.
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        // EXTRA
        // Hint: Like when we navigate arrays left and right, we could approach this with two runners. 
        // Example runners: let leftRunner = this.head; let rightRunner = this.tail;
        // If these runners pass each other, it means there is no true middle node. (Such as having a list of 4 Nodes.)

    }


}

const emptyList = new DoublyLinkedList();
// const singleNodeList = new DoublyLinkedList().insertAtFront(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//     -5, -10, 4, -3, 6, 1, -7, -2,
// ]);