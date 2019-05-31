import React from 'react'
import {
  InlineWrapper,
  CloseButton,
  MarkedText,
} from './ui/styles/styledComponents'

interface State {
  marked: boolean
}

interface Props {
  textItem: string
  index: number
  onDelete: (i: number) => void
}

export class ItemList extends React.Component<Props, State> {
  state: State = {
    marked: false,
  }

  render() {
    const { textItem, index, onDelete } = this.props

    return (
      <li className="itemList">
        <InlineWrapper>
          <div onClick={() => this.changeMarked()}>
            {this.state.marked ? (
              <MarkedText className="tachado">{textItem}</MarkedText>
            ) : (
              <span>{textItem}</span>
            )}
          </div>
          <CloseButton onClick={() => onDelete(index)}>
            <span>X</span>
          </CloseButton>
        </InlineWrapper>
      </li>
    )
  }

  changeMarked = () => {
    this.setState({ marked: !this.state.marked })
  }
}

export default ItemList
