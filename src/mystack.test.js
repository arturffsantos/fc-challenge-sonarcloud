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