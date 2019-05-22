import React from 'react'

interface State {
  marked: boolean
}

interface Props {
  textItem: string
}

export class ItemList extends React.Component<Props, State> {
  state: State = {
    marked: false,
  }

  render() {
    const { textItem } = this.props

    return (
      <li className="itemList" onClick={this.setMarked}>
        {this.state.marked ? (
          <span className="tachado">{textItem}</span>
        ) : (
          <span>{textItem}</span>
        )}
      </li>
    )
  }

  setMarked = () => {
    this.setState({ marked: !this.state.marked })
  }
}

export default ItemList
