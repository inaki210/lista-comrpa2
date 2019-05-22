import React from 'react'
import ItemList from './ItemList'

interface Props {
  topic: string
}

export class TopicList extends React.Component<Props> {
  render() {
    const { topic } = this.props

    return (
      <>
        <h2>{topic}</h2>
        <ul>
          <ItemList textItem="Producto1" />
          <ItemList textItem="Producto2" />
          <ItemList textItem="Producto3" />
          <ItemList textItem="Producto4" />
        </ul>
      </>
    )
  }
}
export default TopicList
