import { DoublyLinkedList } from "./DoublyLinkedList"; // Adjust the import based on your project structure
import { expect, test, describe, beforeEach, vi } from 'vitest';

describe('DoublyLinkedList', () => {
    let list: DoublyLinkedList<number>;

    beforeEach(() => {
        list = new DoublyLinkedList<number>();
    });

    describe('append', () => {
        test('should append elements to the list', () => {
            list.append(10);
            list.append(20);
            list.append(30);

            // Ensure correct tail and size
            expect(list["tail"].FromJust().data).toBe(30);
            expect(list.size()).toBe(3);
        });

        test('should handle append to an empty list', () => {
            list.append(10);

            // Ensure correct head and tail for single element
            expect(list["head"].FromJust().data).toBe(10);
            expect(list["tail"].FromJust().data).toBe(10);
            expect(list.size()).toBe(1);
        });
    });

    describe('insert', () => {
        beforeEach(() => {
            list.append(10);
            list.append(20);
            list.append(30);
        });

        test('should insert element at the beginning', () => {
            list.insert(5, 0);

            // Ensure correct head and size after insertion at the beginning
            expect(list["head"].FromJust().data).toBe(5);
            expect(list.size()).toBe(4);
        });
        test('should insert element in the middle', () => {
            list.insert(15, 1);

            // Ensure correct insertion in the middle and size
            const secondNode = list["head"].FromJust().next.FromJust();
            expect(secondNode.data).toBe(15);
            expect(secondNode.next.FromJust().data).toBe(20);
            expect(list.size()).toBe(4);
        });
        test('should insert element at the end', () => {
            list.insert(40, 3);

            // Ensure correct tail and size after insertion at the end
            expect(list["tail"].FromJust().data).toBe(40);
            expect(list.size()).toBe(4);
        });

        test('should throw error for invalid position', () => {
            expect(() => list.insert(50, 5)).toThrowError("Invalid position");
            expect(() => list.insert(50, -1)).toThrowError("Invalid position");
        });
    });

    describe('remove', () => {
        beforeEach(() => {
            list.append(10);
            list.append(20);
            list.append(30);
            list.append(40);
        });

        test('should remove element from the beginning', () => {
            list.remove(0);

            // Ensure correct head and size after removal from beginning
            expect(list["head"].FromJust().data).toBe(20);
            expect(list.size()).toBe(3);
        });

        test('should remove element from the middle', () => {
            list.remove(1);

            // Ensure correct size and structure after removal from middle
            expect(list["head"].FromJust().next.FromJust().data).toBe(30);
            expect(list.size()).toBe(3);
        });

        test('should remove element from the end', () => {
            list.remove(3);

            // Ensure correct tail and size after removal from end
            expect(list["tail"].FromJust().data).toBe(30);
            expect(list.size()).toBe(3);
        });

        test('should throw error for invalid position', () => {
            expect(() => list.remove(5)).toThrowError("Invalid position");
            expect(() => list.remove(-1)).toThrowError("Invalid position");
        });
    });

    describe('size', () => {
        test('should return correct size of the list', () => {
            list.append(10);
            list.append(20);
            list.append(30);

            expect(list.size()).toBe(3);
        });

        test('should return 0 for an empty list', () => {
            expect(list.size()).toBe(0);
        });
    });

    describe('isEmpty', () => {
        test('should return true for an empty list', () => {
            expect(list.isEmpty()).toBe(true);
        });

        test('should return false for a non-empty list', () => {
            list.append(10);

            expect(list.isEmpty()).toBe(false);
        });
    });

    describe('print', () => {
        test('should print all elements in the list', () => {
            list.append(10);
            list.append(20);
            list.append(30);

            const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
            list.print();

            expect(consoleSpy).toBeCalledWith(10);
            expect(consoleSpy).toBeCalledWith(20);
            expect(consoleSpy).toBeCalledWith(30);

            consoleSpy.mockRestore();
        });
    });
});
