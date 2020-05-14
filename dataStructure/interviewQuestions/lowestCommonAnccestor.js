/*
Question: For given pointer to the root of the binary search tree and two values a and b, return the lowest common ancestor(LCA) of and in the binary search tree.
*/
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function myLowestCommonAnccestor(root, a, b){
    function lca(node){
        if(!node || node.val == a || node.val == b) return node;

        var left = lca(node.left);
        var right = lca(node.right);

        if(!left) return right;
        if(!right) return left;

        return node;
    }

    return lca(root);
}



var tree = new Node(20);
tree.left = new Node(40);
tree.right = new Node(10);
tree.right.left = new Node(11);
tree.right.right = new Node(9);
tree.right.right.right = new Node(6);
tree.left.left = new Node(42);
tree.left.right = new Node(25);

console.log('lowest Common anccestor 25, 9: = ', myLowestCommonAnccestor(tree, 11, 6));