class Node {
  constructor(element, parent) {
    this.element = element
    this.pparent = parent
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
}


let bst = new Bst()
let arr = [10, 8, 19, 6, 15, 22, 20]

arr.forEach(v => {
  bst.append(v)
})

console.log(bst.root);