import { Nothing } from "perhaps-ts";
import { BinarySearchTree } from "./BinarySearchTree"; // Assuming your class is exported from "BinarySearchTree.ts"
import { expect, test, describe, beforeEach } from 'vitest';

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree<number>;

    beforeEach(() => {
        bst = new BinarySearchTree<number>();
    });

    describe('insert', () => {
        test('should insert a node correctly', () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(7);

            // Ensure root and structure correctness
            expect(bst["root"].FromJust().data).toBe(10);
            expect(bst["root"].FromJust().left.FromJust().data).toBe(5);
            expect(bst["root"].FromJust().right.FromJust().data).toBe(15);
            expect(bst["root"].FromJust().left.FromJust().right.FromJust().data).toBe(7);
        });
    });

    describe('remove', () => {
        test('should remove a node correctly', () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(7);

            bst.remove(5);

            // Ensure correct structure after removal
            expect(bst["root"].FromJust().data).toBe(10);
            expect(bst["root"].FromJust().left).not.toBe(Nothing); // Left should exist
            expect(bst["root"].FromJust().left.FromJust().data).toBe(7); // 5 should be replaced by 7
        });

        test('should handle removal of non-existing node', () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);

            bst.remove(7); // Removing a non-existent node

            // Tree structure should remain unchanged
            expect(bst["root"].FromJust().left.FromJust().data).toBe(5);
            expect(bst["root"].FromJust().right.FromJust().data).toBe(15);
        });
    });

    describe('search', () => {
        test('should return true for existing element', () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);

            expect(bst.search(15)).toBe(true);
        });

        test('should return false for non-existing element', () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);

            expect(bst.search(7)).toBe(false);
        });
    });

    describe('inOrderTraverse', () => {
        test('should traverse the tree in order', () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(7);
            bst.insert(12);

            const result: number[] = [];
            bst.inOrderTraverse((data) => result.push(data));

            expect(result).toEqual([5, 7, 10, 12, 15]);
        });
    });
});
