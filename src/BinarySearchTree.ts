import { Maybe, Just, Nothing } from "perhaps-ts";

class TreeNode<T> {
    constructor(
        public data: T,
        public left: Maybe<TreeNode<T>> = Nothing<TreeNode<T>>(),
        public right: Maybe<TreeNode<T>> = Nothing<TreeNode<T>>()
    ) { }
}


export class BinarySearchTree<T> {
    private root: Maybe<TreeNode<T>> = Nothing<TreeNode<T>>();
    insert(data: T): void {
        const newNode = new TreeNode(data);
        if (this.root.IsNothing()) {
            this.root = Just(newNode);
        } else {
            this.insertNode(this.root.FromJust(), newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.data < node.data) {
            if (node.left.IsNothing()) {
                node.left = Just(newNode);
            } else {
                this.insertNode(node.left.FromJust(), newNode);
            }
        } else {
            if (node.right.IsNothing()) {
                node.right = Just(newNode);
            } else {
                this.insertNode(node.right.FromJust(), newNode);
            }
        }
    }

    remove(data: T): void {
        this.root = this.removeNode(this.root, data);
    }

    private removeNode(node: Maybe<TreeNode<T>>, data: T): Maybe<TreeNode<T>> {
        if (node.IsNothing()) {
            return node;
        }
        const currentNode = node.FromJust();
        if (data < currentNode.data) {
            currentNode.left = this.removeNode(currentNode.left, data);
            return Just(currentNode);
        } else if (data > currentNode.data) {
            currentNode.right = this.removeNode(currentNode.right, data);
            return Just(currentNode);
        } else {
            if (currentNode.left.IsNothing() && currentNode.right.IsNothing()) return Nothing<TreeNode<T>>();
            if (currentNode.left.IsNothing()) return currentNode.right;
            if (currentNode.right.IsNothing()) return currentNode.left;
            const minRight = this.findMinNode(currentNode.right.FromJust());
            currentNode.data = minRight.data;
            currentNode.right = this.removeNode(currentNode.right, minRight.data);
            return Just(currentNode);
        }
    }

    private findMinNode(node: TreeNode<T>): TreeNode<T> {
        if (node.left.IsNothing()) {
            return node;
        }
        return this.findMinNode(node.left.FromJust());
    }

    search(data: T): boolean {
        return this.searchNode(this.root, data);
    }

    private searchNode(node: Maybe<TreeNode<T>>, data: T): boolean {
        if (node.IsNothing()) {
            return false;
        }
        const currentNode = node.FromJust();
        if (data < currentNode.data) {
            return this.searchNode(currentNode.left, data);
        }
        if (data > currentNode.data) {
            return this.searchNode(currentNode.right, data);
        }
        return true;
    }

    inOrderTraverse(callback: (data: T) => void): void {
        this.inOrderTraverseNode(this.root, callback);
    }

    private inOrderTraverseNode(node: Maybe<TreeNode<T>>, callback: (data: T) => void): void {
        if (node.IsNothing()) {
            return;
        }
        const currentNode = node.FromJust();
        this.inOrderTraverseNode(currentNode.left, callback);
        callback(currentNode.data);
        this.inOrderTraverseNode(currentNode.right, callback);
    }

}
