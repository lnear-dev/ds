import { Maybe, Just, Nothing } from "perhaps-ts";
export class ListNode<T> {
    constructor(public data: T, public next: Maybe<ListNode<T>> = Nothing<ListNode<T>>()) { }
}


export class LinkedList<T> {
    private head: Maybe<ListNode<T>> = Nothing<ListNode<T>>();
    constructor() { }
    isEmpty(): boolean { return this.head.IsNothing(); }
    size(): number {
        let count = 0;
        let current = this.head;
        while (current.IsJust()) {
            count++;
            current = current.FromJust().next;
        }
        return count;
    }

    append(data: T): void {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = Just(newNode);
            return;
        }
        let current = this.head;
        while (current.IsJust() && current.FromJust().next.IsJust()) {
            current = current.FromJust().next;
        }
        current.FromJust().next = Just(newNode);
    }

    insert(data: T, position: number): void {
        if (position < 0 || position > this.size()) {
            throw new Error("Invalid position");
        }
        const newNode = new ListNode(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = Just(newNode);
        } else {
            let current = this.head;
            let index = 0;
            while (current.IsJust() && index < position - 1) {
                current = current.FromJust().next;
                index++;
            }
            newNode.next = current.FromJust().next;
            current.FromJust().next = Just(newNode);
        }
    }

    remove(position: number): void {
        if (position < 0 || position >= this.size()) {
            throw new Error("Invalid position");
        }
        if (position === 0) {
            this.head = this.head.FromJust().next;
        } else {
            let current = this.head;
            let index = 0;
            while (current.IsJust() && index < position - 1) {
                current = current.FromJust().next;
                index++;
            }
            current.FromJust().next = current.FromJust().next.FromJust().next;
        }
    }

    print(): void {
        let current = this.head;
        while (current.IsJust()) {
            console.log(current.FromJust().data);
            current = current.FromJust().next;
        }
    }
}
