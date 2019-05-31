import React from 'react'
import ItemList from './ListItem'
import { WrapperTopic } from './ui/styles/styledComponents'

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
      <WrapperTopic>
        <h2>{topic}</h2>

        {items.length > 0 && (
          <ul>
            {items.map((item, index) => (
              <ItemList
                textItem={item}
                index={index}
                onDelete={this.deleteItemIndex}
              />
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
      </WrapperTopic>
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
  deleteItemIndex = (index: number) => {
    const array = this.state.items
    array.splice(index, 1)
    this.setState({ items: array })
  }

  onChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItemText: event.target.value })
  }
}
export default TopicList
