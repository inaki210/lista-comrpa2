export class TopicBD {
  private topic: string
  private items: string[]

  constructor(topic: string = 'Topic') {
    this.topic = topic
    this.items = ['X7', 'Y8', 'Z9']
  }

  public getTopic() {
    return this.topic
  }

  public getItems() {
    return this.items
  }
  public getItemByIndex(index: number) {
    return this.items[index]
  }

  public addItem(newItem: string) {
    this.items[this.items.length] = newItem
  }
  public deleteItem(position: number) {
    this.items.splice(position, 1)
  }
  public editItem(position: number, newItem: string) {
    this.items[position] = newItem
  }
}
export default TopicBD
