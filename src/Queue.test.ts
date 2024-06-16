import { expect, test, describe, beforeEach } from 'vitest';
import { Queue } from "./Queue"; // Adjust the import based on your project structure

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('enqueue should add elements to the queue', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        expect(queue.size()).toBe(3);
        expect(queue.isEmpty()).toBe(false);
    });

    test('dequeue should remove and return elements from the queue', () => {
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.dequeue()).toBe(10);
        expect(queue.dequeue()).toBe(20);
        expect(queue.dequeue()).toBeUndefined();
        expect(queue.isEmpty()).toBe(true);
    });

    test('peek should return the first element without removing it', () => {
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.peek()).toBe(10);
        expect(queue.size()).toBe(2);
    });

    test('isEmpty should correctly identify an empty queue', () => {
        expect(queue.isEmpty()).toBe(true);

        queue.enqueue(10);
        expect(queue.isEmpty()).toBe(false);

        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

    test('size should return the number of elements in the queue', () => {
        expect(queue.size()).toBe(0);

        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.size()).toBe(2);

        queue.dequeue();
        expect(queue.size()).toBe(1);

        queue.dequeue();
        expect(queue.size()).toBe(0);
    });
});
