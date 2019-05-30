import React from 'react'
import ItemList from './ListItem'

interface State {
  items: string[]
  topic: string
  newItemText: string
}

export class TopicList extends React.Component<{}, State> {
  state: State = {
    items: [],
    topic: '',
    newItemText: '',
  }

  render() {
    const { items, topic, newItemText } = this.state

    return (
      <div>
        <h2>{topic}</h2>

        {items.length > 0 && (
          <ul>
            {items.map((item, index) => (
              <ItemList textItem={item} />
            ))}
          </ul>
        )}

        <input
          type="text"
          id={'txt' + topic}
          value={newItemText}
          onChange={this.onChangeItem}
        />
        <input type="button" onClick={this.addItem} value="Añadir" />
        <button onClick={this.addItem}>btnAñadir</button>
      </div>
    )
  }

  addItem = () => {
    const newItem: string = this.state.newItemText
    if (newItem !== '') {
      const oldArrayItems = this.state.items
      const newArrayItems2 = [...oldArrayItems, newItem]
      this.setState({ items: newArrayItems2 })
    }
  }

  onChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItemText: event.target.value })
  }
}
export default TopicList
