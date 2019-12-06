import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const FuckWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  color: white;
`

const Home: React.FC = () => {
  const [count, setCount] = useState(0)
  return <FuckWrapper>{count}</FuckWrapper>
}

const HomeView = React.memo(Home)

export default HomeView
