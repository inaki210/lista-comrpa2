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
      <ul>
        <li className="itemList" onClick={() => this.changeMarked()}>
          {this.state.marked ? (
            <span className="marked">{textItem}</span>
          ) : (
            <span>{textItem}</span>
          )}
        </li>
      </ul>
    )
  }

  changeMarked = () => {
    this.setState({ marked: !this.state.marked })
  }
}

export default ItemList
