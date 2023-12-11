/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * 
 * A very common use case for a MinHeap is Priority Queues, Memory Management, or being used as part of a "Heap Sort"
 * 
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * @param {number} i
     */
    idxOfParent(i) {
        return Math.floor(i / 2);
    }

    /**
     * @param {number} i
     */
    idxOfLeftChild(i) {
        return i * 2;
    }

    /**
     * @param {number} i
     */
    idxOfRightChild(i) {
        return i * 2 + 1;
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return (this.heap.length >= 1) ? this.heap[1] : null;
    }

    /**
     * Inserts a new number into the heap and reorders heap to maintain order.
     * 1. Push new num to back of the array.
     * 2. Iteratively swap the new num with its parent while it is smaller than
     *    its parent.
     * - Time: O(log n) logarithmic due to shiftUp.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        // Link to Visual: https://www.cs.usfca.edu/~galles/visualization/Heap.html
        // Your Code Here
        // We can use IdxOfParent to fetch the idx of the parent we want to compare against.
        // Compare the value of the insert num to the value of the parent and swap them if the inserted num is lower.
        let temp = 0
        let idxOfNum = this.heap.length
        this.heap.push(num)

        let parentIDX = this.idxOfParent(idxOfNum)

        while (this.heap[idxOfNum] < this.heap[parentIDX] && parentIDX >= 1){
            temp = this.heap[idxOfNum]
            this.heap[idxOfNum] = this.heap[parentIDX]
            this.heap[parentIDX] = temp
            idxOfNum = parentIDX
            parentIDX = this.idxOfParent(idxOfNum)
        }

        return this

        // Hint: We'll be primarily using indexes since this is stored in an array. So we'll want to track the idx of our inserted value.
        // Hint 2: Since we'll be swapping, we might want to use a temp variable to hold onto any node data as we swap.
    }

    // prints tree with root on left and index in parens in reverse inorder traversal
    // https://www.geeksforgeeks.org/print-binary-tree-2-dimensions/
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }

}

const testMinHeap = new MinHeap();
console.log(testMinHeap.insert(2));
console.log(testMinHeap.insert(5));
console.log(testMinHeap.insert(7));
console.log(testMinHeap.insert(10));
console.log(testMinHeap.insert(3));
console.log(testMinHeap.insert(6));
// console.log(testMinHeap.printHorizontalTree());
