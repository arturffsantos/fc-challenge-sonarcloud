const MyStack = require('./mystack');

test("empty stack must have size() === 0", () => {
    const stack = new MyStack();
    expect(stack.size()).toBe(0);
})