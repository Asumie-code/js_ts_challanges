// rework this code

export function ListNode(val?, next?) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
}

export function insert(root, item) {
        let temp = new ListNode();
        let ptr;
        temp.val = item;
        temp.next = null;

        if (root === null) {
                root = temp;
        } else {
                ptr = root;
                while (ptr.next != null) {
                        ptr = ptr.next;
                }
                ptr.next = temp;
        }
        return root;
}

export function arrayToList(arr) {
        let root = null;
        for (let i = 0; i < arr.length; i++) root = insert(root, parseInt(arr[i]));
        return root;
}

export class Node<T> {
        value: T;
        next: Node<T> | null;
        prev: Node<T> | null;

        constructor(val: T) {
                this.value = val;
                this.next = null;
                this.prev = null;
        }
}

export class LinkedList<T> {
        #head: Node<T> | null;
        #tail: Node<T> | null;
        #length: number;

        constructor(...values: T[]) {
                this.#head = this.#tail = null;
                this.#length = 0;

                if (values.length > 0) {
                        values.forEach((value) => this.append(value));
                }
        }

        *iterator(): IterableIterator<T> {
                let currentItem = this.#head;

                while (currentItem) {
                        yield currentItem.value;
                        currentItem = currentItem.next;
                }
        }

        [Symbol.iterator]() {
                return this.iterator();
        }

        get head(): Node<T> | null {
                return this.#head ? this.#head : null;
        }

        get tail(): Node<T> | null {
                return this.#tail ? this.#tail : null;
        }

        get length(): number {
                return this.#length;
        }

        append(val: T, checkDuplicates: boolean = false): boolean {
                if (checkDuplicates && this.#isDuplicate(val)) return false;

                let newItem = new Node<T>(val);

                if (!this.#tail) {
                        this.#head = this.#tail = newItem;
                } else {
                        this.#tail.next = newItem;
                        newItem.prev = this.#tail;
                        this.#tail = newItem;
                }

                this.#length++;

                return true;
        }

        prepand(val: T, checkDuplicates: boolean = false): boolean {
                if (checkDuplicates && this.#isDuplicate(val)) return false;

                let newItem = new Node<T>(val);

                if (!this.#head) {
                        this.#head = this.#tail = newItem;
                } else {
                        newItem.next = this.#head;
                        this.#head.prev = newItem;
                        this.#head = newItem;
                }

                this.#length++;

                return true;
        }

        insert(val: T, previousItem: T, checkDuplicates: boolean = false): boolean {
                if (checkDuplicates && this.#isDuplicate(val)) {
                        return false;
                }

                let newItem: Node<T> = new Node<T>(val);
                let currentItem: Node<T> | null = this.#head;

                if (!currentItem) {
                        return false;
                } else {
                        while (true) {
                                if (currentItem.value === previousItem) {
                                        newItem.next = currentItem.next;
                                        newItem.prev = currentItem;
                                        currentItem.next = newItem;

                                        if (newItem.next) {
                                                newItem.next.prev = newItem;
                                        } else {
                                                this.#tail = newItem;
                                        }

                                        this.#length++;
                                        return true;
                                } else {
                                        if (currentItem.next) {
                                                currentItem = currentItem.next;
                                        } else {
                                                return false;
                                        }
                                }
                        }
                }
        }

        remove(val: T): T | undefined {
                let currentItem = this.#head;

                if (!currentItem) return; // bad null | undefined check for  this.#head.

                if (currentItem.value === val) {
                        this.#head = currentItem.next;
                        this.#head!.prev = null; //null assertion  work around for the previous issue, better solution can be written
                        currentItem.next = currentItem.prev = null;
                        this.#length--;
                        return currentItem.value;
                } else {
                        while (true) {
                                if (currentItem.value === val) {
                                        if (currentItem.next) {
                                                // null assertion work around
                                                currentItem.prev!.next = currentItem.next;
                                                currentItem.next.prev = currentItem.prev;
                                                currentItem.next = currentItem.prev = null;
                                        } else {
                                                currentItem.prev!.next = null;
                                                this.#tail = currentItem.prev;
                                                currentItem.next = currentItem.prev = null;
                                        }

                                        this.#length--;

                                        return currentItem.value;
                                } else {
                                        if (currentItem.next) currentItem = currentItem.next;
                                        else return;
                                }
                        }
                }
        }

        removeHead(): T | undefined {
                let currentItem = this.#head;

                if (!currentItem) return; // problematic
                // work around
                if (!this.#head?.next) {
                        this.#head = null;
                        this.#tail = null;
                } else {
                        this.#head.next.prev = null;
                        this.#head = this.#head.next;
                        currentItem.next = currentItem.prev = null;
                }

                this.#length--;

                return currentItem.value;
        }

        removeTail(): T | undefined {
                let currentItem = this.#tail;

                if (!currentItem) return;

                if (!this.#tail!.prev) {
                        this.#head = null;
                        this.#tail = null;
                } else {
                        this.#tail!.prev.next = null;
                        this.#tail = this.#tail!.prev;
                        currentItem.next = currentItem.prev = null;
                }

                this.#length--;
                return currentItem.value;
        }

        toArray(): T[] {
                return [...this];
        }

        #isDuplicate(val: T): boolean {
                let set = new Set(this.toArray());
                return set.has(val);
        }
}
