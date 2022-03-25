class MyStack {
    items = [];

    push = (item) => this.items.push(item)
    pop = () => this.items.pop()
    peek = () => this.size() > 0 ? this.items[this.size() - 1] : undefined

    isEmpty = () => this.size() === 0
    size = () => this.items.length
}

module.exports = MyStack;