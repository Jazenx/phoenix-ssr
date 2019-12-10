import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const UserBox = dynamic(() => import('./../UserBox'))

const RightBarWrapper = styled.div`
  width: 270px;
  background-color: yellow;
`

const RightBar: React.FC = () => {
  return (
    <RightBarWrapper>
      <UserBox />
    </RightBarWrapper>
  )
}

export default RightBar
