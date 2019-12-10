import React from 'react'
import styled from 'styled-components'

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: #27282d;
  color: #848484;
  font-size: 14px;
`

const UserBox: React.FC = () => {
  return <BoxWrapper>昨夜西风凋碧树，独上高楼，望尽天涯路。</BoxWrapper>
}

export default UserBox
