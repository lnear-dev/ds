# Lnear Data Structures Package

This package provides TypeScript implementations of various data structures: `DoublyLinkedList`, `BinarySearchTree`, `LinkedList`, `Stack`, and `Queue`. These classes offer efficient operations for managing collections of data.

## Installation

To use the package, you can install it via npm:

```bash
npm install @lnear/ds
```

## Usage

### DoublyLinkedList

The `DoublyLinkedList` class provides a doubly linked list implementation with methods for basic operations like appending, inserting, removing, and printing elements.

```typescript
import { DoublyLinkedList } from "@lnear/ds";

// Create a new doubly linked list
const list = new DoublyLinkedList<number>();

// Append elements
list.append(10);
list.append(20);
list.append(30);

// Insert element at a specific position
list.insert(15, 1);

// Remove element at a specific position
list.remove(2);

// Print all elements
list.print();

// Check size and emptiness
console.log("Size:", list.size()); // Outputs: 3
console.log("Is Empty:", list.isEmpty()); // Outputs: false
```

### BinarySearchTree

The `BinarySearchTree` class provides a binary search tree implementation with methods for insertion, deletion, searching, and in-order traversal.

```typescript
import { BinarySearchTree } from "@lnear/ds";

// Create a new binary search tree
const bst = new BinarySearchTree<number>();

// Insert elements
bst.insert(10);
bst.insert(5);
bst.insert(15);

// Remove element
bst.remove(5);

// Search for an element
console.log("Contains 10:", bst.search(10)); // Outputs: true
console.log("Contains 5:", bst.search(5)); // Outputs: false

// In-order traversal
bst.inOrderTraverse((data) => console.log(data));
```

### LinkedList

The `LinkedList` class provides a singly linked list implementation with methods for basic operations like appending, inserting, removing, and printing elements.

```typescript
import { LinkedList } from "@lnear/ds";

// Create a new linked list
const list = new LinkedList<number>();

// Append elements
list.append(10);
list.append(20);
list.append(30);

// Insert element at a specific position
list.insert(15, 1);

// Remove element at a specific position
list.remove(2);

// Print all elements
list.print();

// Check size and emptiness
console.log("Size:", list.size()); // Outputs: 3
console.log("Is Empty:", list.isEmpty()); // Outputs: false
```

### Stack

The `Stack` class provides a stack implementation with methods for pushing, popping, peeking, and checking the size and emptiness of the stack.

```typescript
import { Stack } from "@lnear/ds";

// Create a new stack
const stack = new Stack<number>();

// Push elements
stack.push(10);
stack.push(20);
stack.push(30);

// Pop element
console.log(stack.pop()); // Outputs: 30

// Peek top element
console.log(stack.peek()); // Outputs: 20

// Check size and emptiness
console.log("Size:", stack.size()); // Outputs: 2
console.log("Is Empty:", stack.isEmpty()); // Outputs: false
```

### Queue

The `Queue` class provides a queue implementation with methods for enqueuing, dequeuing, peeking, and checking the size and emptiness of the queue.

```typescript
import { Queue } from "@lnear/ds";

// Create a new queue
const queue = new Queue<number>();

// Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// Dequeue element
console.log(queue.dequeue()); // Outputs: 10

// Peek front element
console.log(queue.peek()); // Outputs: 20

// Check size and emptiness
console.log("Size:", queue.size()); // Outputs: 2
console.log("Is Empty:", queue.isEmpty()); // Outputs: false
```

## API

### DoublyLinkedList

- **Methods**:
  - `isEmpty(): boolean`: Checks if the doubly linked list is empty.
  - `size(): number`: Returns the number of elements in the doubly linked list.
  - `append(data: T): void`: Appends an element to the end of the doubly linked list.
  - `insert(data: T, position: number): void`: Inserts an element at a specified position.
  - `remove(position: number): void`: Removes an element at a specified position.
  - `print(): void`: Prints all elements in the doubly linked list.

### BinarySearchTree

- **Methods**:
  - `insert(data: T): void`: Inserts an element into the binary search tree.
  - `remove(data: T): void`: Removes an element from the binary search tree.
  - `search(data: T): boolean`: Searches for an element in the binary search tree.
  - `inOrderTraverse(callback: (data: T) => void): void`: Performs an in-order traversal of the binary search tree.

### LinkedList

- **Methods**:
  - `isEmpty(): boolean`: Checks if the linked list is empty.
  - `size(): number`: Returns the number of elements in the linked list.
  - `append(data: T): void`: Appends an element to the end of the linked list.
  - `insert(data: T, position: number): void`: Inserts an element at a specified position.
  - `remove(position: number): void`: Removes an element at a specified position.
  - `print(): void`: Prints all elements in the linked list.

### Stack

- **Methods**:
  - `push(item: T): void`: Pushes an element onto the stack.
  - `pop(): T | undefined`: Pops and returns the top element from the stack.
  - `peek(): T | undefined`: Returns the top element from the stack without removing it.
  - `isEmpty(): boolean`: Checks if the stack is empty.
  - `size(): number`: Returns the number of elements in the stack.

### Queue

- **Methods**:
  - `enqueue(item: T): void`: Enqueues an element at the rear of the queue.
  - `dequeue(): T | undefined`: Dequeues and returns the front element from the queue.
  - `peek(): T | undefined`: Returns the front element from the queue without dequeuing it.
  - `isEmpty(): boolean`: Checks if the queue is empty.
  - `size(): number`: Returns the number of elements in the queue.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests with improvements.

## License

This package is licensed under the MIT License. See the LICENSE file for more details.
