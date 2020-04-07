/* A binary tree node has data, pointer to left child 
and a pointer to right child */

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/*
1. If tree is empty then return 0
2. Else
    (a) Get the max depth of left subtree recursively i.e.,
    call maxDepth(tree - > left - subtree)
    (a) Get the max depth of right subtree recursively i.e.,
    call maxDepth(tree - > right - subtree)
    (c) Get the max of max depths of left and right
        subtrees and add 1 to it
        for the current node.
        max_depth = max(max dept of left subtree,
        max depth of right subtree) + 1
    (d) Return max_depth

*/


/* Compute the "maxDepth" of a tree -- the number of  
    nodes along the longest path from the root node  
    down to the farthest leaf node.*/

function height(node) {
    if (node == null) return 0;
/* compute the depth of each subtree */
    var depthL = height(node.left);
    var depthR = height(node.right);
/* use the larger one */
    if (depthL < depthR) return depthL + 1;
    return depthR + 1;
}



// test
var tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.right.left = new Node(4);
tree.left.right = new Node(5);
tree.left.left = new Node(6);
tree.left.left.right = new Node(7);
var h = height(tree);
console.log('Height of tree: ', h);