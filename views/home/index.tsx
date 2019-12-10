import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../../redux/actions/count'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  color: white;
`

const HomeView: React.FC = () => {
  const countX: number = useSelector((state: any) => state.count)
  const dispatch = useDispatch()

  const reduxAdd = useCallback(() => dispatch(addCount(100)), [dispatch])

  return (
    <HomeWrapper>
      <span>Home {countX}</span>
      <button onClick={reduxAdd}>add</button>
    </HomeWrapper>
  )
}

export default React.memo(HomeView)
