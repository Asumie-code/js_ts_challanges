import { Node, LinkedList } from '../linkedList'




test('instantiate a  Node', () => {
    let node = new Node<number>(2); 
    expect(node.value).toEqual(2)
    expect(node.next).toBe(null)
    expect(node.prev).toBe(null)
})



test('instantiate a LinkedList', () => {
    let list: LinkedList<number>   = new LinkedList(2)
    expect(list).toBeDefined()
    expect(list.head).toBeDefined()
    expect(list.head?.value).toEqual(2)
    expect(list.head?.next).toBeNull()
    expect(list.head?.prev).toBeNull()
    expect(list.head).toEqual(list.tail)
    expect(list.length).toEqual(1)
})


test('append values to LinkedList', () => {
    let list: LinkedList<number>   = new LinkedList(2)
    list.append(3)
    expect(list.head?.next).not.toBeNull()
    expect(list.tail).not.toBeNull()
    expect(list.tail?.value).toEqual(3)
})


test('prepend values to linkedList', () => {
    let list: LinkedList<number>   = new LinkedList(2)
    list.prepand(3) 
    expect(list.head).not.toBeNull()
    expect(list.head?.next).not.toBeNull()
    expect(list.length).toEqual(2)
    expect(list.head?.value).toEqual(3)
})



test('insert value to linkedList', () => {
    let list: LinkedList<number> = new LinkedList(1 ,2 ,3)
    let values = [1, 2, 4, 3]
    list.insert(4, 2)
    expect(list.head).not.toBeNull()
    expect(list.tail).not.toBeNull()
    expect(list.tail?.value).toEqual(3)

    let index = 0
    for(let value of list) {
        expect(value).toEqual(values[index])
        index++
    }

})



test('remove head from linkedList', () => {
    let list: LinkedList<number> = new LinkedList(1, 2, 3)

    
    list.removeHead()
    expect(list.head).not.toBeNull()
    expect(list.tail).not.toBeNull()
    expect(list.head?.value).toEqual(2)
    expect(list.tail?.value).toEqual(3)

})




test('remove tail from linkedList', () => {
    let list: LinkedList<number> = new LinkedList(1, 2, 3)

    
    list.removeTail()
    expect(list.head).not.toBeNull()
    expect(list.tail).not.toBeNull()
    expect(list.head?.value).toEqual(1)
    expect(list.tail?.value).toEqual(2)

})

