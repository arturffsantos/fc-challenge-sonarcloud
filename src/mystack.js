class MyStack {
    items = [];

    push = (item) => this.items.push(item)
    pop = () => this.items.pop()
    
    isEmpty = () => this.items.length === 0
    size = () => this.items.length

    peek = () => this.size > 0 ? this.items[this.size() - 1] : undefined
}

module.exports = MyStack;