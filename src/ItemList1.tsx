import React from 'react'

interface State {
  marked: boolean[]
}

interface Props {
  /*textItem: string*/
  arrayItems: string[]
}

export class ItemList extends React.Component<Props, State> {
  state: State = {
    marked: [],
  }

  render() {
    const { /*textItem,*/ arrayItems } = this.props

    return (
      <>
        {arrayItems.length > 0 && (
          <ul>
            {arrayItems.map((item, index) => (
              <li className="itemList" onClick={() => this.changeMarked(index)}>
                {this.state.marked[index] ? (
                  <span className="marked">{item}</span>
                ) : (
                  <span>{item}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }

  changeMarked = (index: number) => {
    //this.setState({ marked: !this.state.marked })
    //this.setState({ marked[]: !this.state.marked[index] })
  }
}

interface i_arrayItems {
  arrayItems: string[]
}
const ItemsList: React.SFC<i_arrayItems> = ({ arrayItems }) => (
  <div>
    {arrayItems.length > 0 && (
      <ul>
        {arrayItems.map((item, index) => (
          <li key={index}>
            <span className="marked">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default ItemList
