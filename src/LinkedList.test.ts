import { expect, test, describe, beforeEach } from 'vitest';
import { LinkedList } from "./LinkedList";


describe('LinkedList', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
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

    describe('size', () => {
        test('should return 0 for an empty list', () => {
            expect(list.size()).toBe(0);
        });

        test('should return the number of elements in the list', () => {
            list.append(10);
            list.append(20);
            list.append(30);
            expect(list.size()).toBe(3);
        });
    });

    describe('append', () => {
        test('should append elements to the end of the list', () => {
            list.append(10);
            list.append(20);
            list.append(30);

            expect(list.size()).toBe(3);
            expect(list.isEmpty()).toBe(false);
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
            expect(list.size()).toBe(4);
            expect(list["head"].FromJust().data).toBe(5);
        });

        test('should insert element in the middle', () => {
            list.insert(15, 1);
            expect(list.size()).toBe(4);
            let current = list["head"].FromJust();
            expect(current.data).toBe(10);
            current = current.next.FromJust();
            expect(current.data).toBe(15);
            current = current.next.FromJust();
            expect(current.data).toBe(20);
        });

        test('should insert element at the end', () => {
            list.insert(40, 3);
            expect(list.size()).toBe(4);
            let current = list["head"].FromJust();
            expect(current.data).toBe(10);
            current = current.next.FromJust();
            expect(current.data).toBe(20);
            current = current.next.FromJust();
            expect(current.data).toBe(30);
            current = current.next.FromJust();
            expect(current.data).toBe(40);
        });
    });
});