// rework this code 

export function ListNode(val?, next?) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
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
        for (let i = 0; i < arr.length; i++)
                root = insert(root, parseInt(arr[i]));
        return root;
}



class Node<T> {
        value: T
        next: Node<T> | null 
        prev: Node<T> | null 
        
        constructor(val: T) {
                this.value = val 
                this.next = null 
                this.prev = null 
        }
}

