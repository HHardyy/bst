class Node {
  constructor(element, parent) {
    this.element = element
    this.parent = parent
    this.left = null
    this.right = null
  }
}

class Bst {
  constructor() { 
    this.root = null
    this.size = 0
  }
  append(element) {
    if (this.root === null) {
      this.root = new Node(element, null)
      this.size++
      return
    } else {  
      let current = this.root
      let compare = 0
      let parent = null

      while (current) {
        compare = element - current.element
        parent = current
        if (compare > 0) {
          current = current.right
        } else if (compare < 0) {
          current = current.left
        } else {
          break
        }
      }

      let newNode = new Node(element, parent)
      if (compare > 0) {
        parent.right = newNode
      } else {
        parent.left = newNode
      }
    }
  }
  preorderTraversal(visitor) {
    const traversal = (node) => {
      if (!node) return
      visitor.visit(node)
      traversal(node.left);
      traversal(node.right)
    }

    traversal(this.root)
  }
  inorderTraversal(visitor) {
    const traversal = (node) => {
      if (!node) return
      traversal(node.left);
      visitor.visit(node)
      traversal(node.right)
    }

    traversal(this.root)
  }
  postorderTraversal(visitor) {
    const traversal = (node) => {
      if (!node) return
      traversal(node.left);
      visitor.visit(node)
      traversal(node.right)
    }

    traversal(this.root)
  }
  levelOrderTraversal(visitor) {
    if (!this.root || !visitor) return
    let stack = [this.root]
    let index = 0
    let currentNode = null

    while (currentNode = stack[index++]) {
      visitor.visit(currentNode)

      if (currentNode.left) {
        stack.push(currentNode.left)
      }

      if (currentNode.right) {
        stack.push(currentNode.right)
      }
    }
    stack = null
  }
  invertTree() {   // 反转二叉树   
    if (!this.root) return
    let stack = [this.root]
    let index = 0
    let currentNode = null

    while (currentNode = stack[index++]) {
      let temp = currentNode.left
      currentNode.left = currentNode.right
      currentNode.right = temp

      if (currentNode.left) {
        stack.push(currentNode.left)
      }

      if (currentNode.right) {
        stack.push(currentNode.right)
      }
    }
    stack = null
    return this.root
  }
}


let bst = new Bst()
let arr = [10, 8, 19, 6, 15, 22, 20]

arr.forEach(v => {
  bst.append(v)
})

// console.log(bst.root);


// 4种遍历方法
// 前序遍历
bst.preorderTraversal({
  visit: (node) => {
    console.log('****', node.element);
  }
})
console.log("====================");

// 中序遍历
bst.inorderTraversal({
  visit: (node) => {
    console.log('****', node.element);
  }
})

// 后序遍历
console.log("====================");
bst.postorderTraversal({
  visit: (node) => {
    console.log('****', node.element);
  }
}) 

// 层序遍历
console.log("====================");
bst.levelOrderTraversal({
  visit: (node) => {
    console.log('****', node.element);
  }
}) 

console.log("反转");
console.dir(bst.invertTree(), {
  depth: 100
});