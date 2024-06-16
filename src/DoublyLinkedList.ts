import { Maybe, Just, Nothing } from "perhaps-ts";
export class DoublyListNode<T> {
    constructor(
        public data: T,
        public next: Maybe<DoublyListNode<T>> = Nothing<DoublyListNode<T>>(),
        public prev: Maybe<DoublyListNode<T>> = Nothing<DoublyListNode<T>>()
    ) { }
}

export class DoublyLinkedList<T> {
    private head: Maybe<DoublyListNode<T>>;
    private tail: Maybe<DoublyListNode<T>>;

    constructor() {
        this.head = Nothing<DoublyListNode<T>>();
        this.tail = Nothing<DoublyListNode<T>>();
    }

    isEmpty(): boolean {
        return this.head.IsNothing();
    }

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
        const newNode = new DoublyListNode(data);
        if (this.isEmpty()) {
            this.head = Just(newNode);
            this.tail = Just(newNode);
            return;
        }
        const currentTail = this.tail.FromJust();
        currentTail.next = Just(newNode);
        newNode.prev = Just(currentTail);
        this.tail = Just(newNode);
    }

    insert(data: T, position: number): void {
        if (position < 0 || position > this.size()) {
            throw new Error("Invalid position");
        }
        const newNode = new DoublyListNode(data);
        if (position === 0) {
            newNode.next = this.head;
            if (this.head.IsJust()) {
                this.head.FromJust().prev = Just(newNode);
            }
            this.head = Just(newNode);
        } else {
            let current = this.head;
            let index = 0;
            while (current.IsJust() && index < position - 1) {
                current = current.FromJust().next;
                index++;
            }
            newNode.next = current.FromJust().next;
            newNode.prev = current;
            if (current.FromJust().next.IsJust()) {
                current.FromJust().next.FromJust().prev = Just(newNode);
            }
            current.FromJust().next = Just(newNode);
        }
        if (newNode.next.IsNothing()) {
            this.tail = Just(newNode);
        }
    }

    remove(position: number): void {
        if (position < 0 || position >= this.size()) {
            throw new Error("Invalid position");
        }
        if (position === 0) {
            this.head = this.head.FromJust().next;
            if (this.head.IsJust()) {
                this.head.FromJust().prev = Nothing<DoublyListNode<T>>();
            } else {
                this.tail = Nothing<DoublyListNode<T>>();
            }
        } else {
            let current = this.head;
            let index = 0;
            while (current.IsJust() && index < position) {
                current = current.FromJust().next;
                index++;
            }
            if (current.IsJust()) {
                current.FromJust().prev.FromJust().next = current.FromJust().next;
                if (current.FromJust().next.IsJust()) {
                    current.FromJust().next.FromJust().prev = current.FromJust().prev;
                } else {
                    this.tail = current.FromJust().prev;
                }
            }
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
