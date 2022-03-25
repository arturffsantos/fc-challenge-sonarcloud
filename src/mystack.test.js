const MyStack = require('./mystack');

test("empty stack must have size() === 0", () => {
    const stack = new MyStack();
    expect(stack.size()).toBe(0);
})

test("stack with 1 item must have size() === 1", () => {
    const stack = new MyStack();
    stack.push('A');
    expect(stack.size()).toBe(1);
})

test("peek empty stack should return undefined", () => {
    const stack = new MyStack();
    expect(stack.peek()).toBeUndefined();
})

test("peek stack should return last inserted item", () => {
    const stack = new MyStack();
    stack.push('A');
    stack.push('B');

    expect(stack.peek()).toEqual('B');
})