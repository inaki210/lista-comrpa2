import styled from 'styled-components'

export { WrapperTopic, InlineWrapper, CloseButton, MarkedText }

const WrapperTopic = styled.div`
  width: 500px;
  background-color: #eee;
`

const InlineWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
`
const CloseButton = styled.div`
  position: absolute;
  right: 0;
`
const MarkedText = styled.span`
  text-decoration: line-through;
  color: #aaa;
`
