import { expect, test, describe, beforeEach } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    describe('push', () => {
        test('should add elements to the stack', () => {
            stack.push(10);
            stack.push(20);
            stack.push(30);

            expect(stack.size()).toBe(3);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe('pop', () => {
        beforeEach(() => {
            stack.push(10);
            stack.push(20);
            stack.push(30);
        });

        test('should remove and return elements from the top of the stack', () => {
            expect(stack.pop()).toBe(30);
            expect(stack.size()).toBe(2);

            expect(stack.pop()).toBe(20);
            expect(stack.pop()).toBe(10);
            expect(stack.size()).toBe(0);
            expect(stack.isEmpty()).toBe(true);
        });

        test('should return undefined when popping from an empty stack', () => {
            stack.pop();
            stack.pop();
            stack.pop();

            expect(stack.pop()).toBeUndefined();
            expect(stack.size()).toBe(0);
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe('peek', () => {
        test('should return the top element without removing it', () => {
            stack.push(10);
            stack.push(20);

            expect(stack.peek()).toBe(20);
            expect(stack.size()).toBe(2);
        });

        test('should return undefined when peeking an empty stack', () => {
            expect(stack.peek()).toBeUndefined();
            expect(stack.size()).toBe(0);
        });
    });

    describe('isEmpty', () => {
        test('should return true for an empty stack', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        test('should return false for a non-empty stack', () => {
            stack.push(10);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe('size', () => {
        test('should return 0 for an empty stack', () => {
            expect(stack.size()).toBe(0);
        });

        test('should return the number of elements in the stack', () => {
            stack.push(10);
            stack.push(20);
            stack.push(30);
            expect(stack.size()).toBe(3);
        });
    });
});