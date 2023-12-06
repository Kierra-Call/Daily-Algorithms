/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
      this.left = null;
      /** @type {BSTNode|null} */
      this.right = null;
    }
  }
  
  /**
   * Represents an ordered tree of nodes where the data of left nodes are <= to
   * their parent and the data of nodes to the right are > their parent's data.
   */
  class BinarySearchTree {
    constructor() {
      /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
      this.root = null;
    }
  
    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if (this.root === null){
            return true
        }
    }
  
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.isEmpty()) {
            return null
        }
        while (current.left !== null) {
            current = current.left

        }
        return current.data
    }
  /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
  minRecursive(current = this.root) {
    if (current == null) { //reached end of the tree to go "back up" in the tree
        return null
    }
    if (current.left == null) {
        return current.data
    }
    return this.maxRecursive(current.left)
  }
  
  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (this.isEmpty()) {
        return null
    }
    while (current.right !== null) {
        current = current.right
    }
    return current.data
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (current == null) { //reached end of the tree to go "back up" in the tree
        return null
    }
    if (current.right == null) {
        return current.data
    }
    return this.maxRecursive(current.right)
  }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }

      /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
      contains(searchVal) {
        if (this.root === null) {
            return false
        }

        if (searchVal === this.root) {
            return true
        }

        let current = this.root
        while (current !== null && current.data !== searchVal) {
            if (current.data > searchVal) {
                current = current.left
            }
            else {
                current = current.right
            }
        }
        if (current === null)
            return false
        return true
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
      if (current === null) {
          return false
      }
      if (current.data === searchVal) {
          return true
      }

      if (current.data > searchVal) {
          return this.containsRecursive(searchVal, current.left)
      }
      else {
          return this.containsRecursive(searchVal, current.right)
      }
  }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
      const node = new BSTNode(newVal);

      if (this.isEmpty()) {
        this.root = node;
        return this;
      }

      let current = this.root;
    // Note: while(true) is risky, but it's safe to use as long as we have return cases for all of our logic. That way the loop can interrupt without infinite looping. 
      while (true) {
        if (newVal <= current.data) {
          if (current.left === null) {
            current.left = node;
            return this;
          }

          current = current.left;
        } else {
          // newVal is greater than current.data
          if (current.right === null) {
            current.right = node;
            return this;
          }

          current = current.right;
        }
      }
    }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, curr = this.root) {
      if (this.root === null) {
          this.root = new BSTNode(newVal)
          return this
      }

      if (curr.data === newVal) {
          return this
      }

      if (newVal < curr.data) {
          if (curr.left === null) {
              curr.left = new BSTNode(newVal)
              return this
          }
          return this.insertRecursive(newVal, curr.left)
      }

      else {
          if (curr.right === null) {
              curr.right = new BSTNode(newVal)
              return this
          }
          return this.insertRecursive(newVal, curr.right)
      }

  }

      /**
 * DFS Preorder: (CurrNode, Left, Right)
 * Converts this BST into an array following Depth First Search preorder.
 * Example on the fullTree var:
 * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
      toArrPreorder(node = this.root, vals = []) {
        if (node){
          this.toArrPreorder(node.left, vals)
        
        vals.push(node.data)
        this.toArrPreorder(node.right, vals)

        return vals;
        }
        
        // Hint: travel as left as we can go to find the lowest node. -> Parent of left most to get the node previous. Then go right for the next value.
    }

    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(node = this.root, vals = []) {
        

    }

    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * Example on the fullTree var:
     * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(node = this.root, vals = []) {
        // Your code here 

    }
}
const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new BSTNode(10);
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new BSTNode(10);
  twoLevelTree.root.left = new BSTNode(5);
  twoLevelTree.root.right = new BSTNode(15);
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(6);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.left = new BSTNode(13);


  console.log(threeLevelTree.min())
  console.log(emptyTree.min())
  console.log(threeLevelTree.max())
  console.log(emptyTree.max())

  console.log(threeLevelTree.maxRecursive())
  console.log(threeLevelTree.minRecursive())
  
  
  /* fullTree
  root
  <-- 25 -->
  /            \
  15             50
  /    \         /    \
  10     22      35     70
  /   \   /  \    /  \   /  \
  4    12  18  24  31  44 66  90
  */
 /***************** Uncomment after insert method is created. ****************/
 const fullTree = new BinarySearchTree();
 fullTree
 .insert(25)
 .insert(15)
 .insert(10)
 .insert(22)
 .insert(4)
 .insert(12)
 .insert(18)
 .insert(24)
 .insert(50)
 .insert(35)
 .insert(70)
 .insert(31)
 .insert(44)
 .insert(66)
 .insert(90);
 console.log(fullTree.toArrPreorder())