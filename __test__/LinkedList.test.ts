import { Node } from '../linkedList'




test('sample test', () => {
    let node = new Node<number>(2); 
    expect(node.value).toEqual(2)
    expect(node.next).toBe(null)
    expect(node.prev).toBe(null)
})

