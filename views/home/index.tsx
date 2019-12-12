import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../../redux/actions/count'
import styled from 'styled-components'
import { selectCounts } from './../../redux/selectors/count'

const HomeWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  color: white;
`

const HomeView: React.FC = () => {
  const [info, setInfo] = useState(9)
  const countX = useSelector((state: any) => state.count)
  const scount = useSelector(selectCounts)
  const dispatch = useDispatch()

  const reduxAdd = useCallback(() => dispatch(addCount(Number(info))), [
    dispatch,
    info
  ])

  const handleInfoChange = (e: any) => {
    console.log(e.target.value)
    setInfo(e.target.value)
  }

  return (
    <HomeWrapper>
      {/* <span>Home {countX.toString()}</span> */}
      <input value={info} onChange={handleInfoChange}></input>
      <span>reselect {scount.toString()}</span>
      <button onClick={reduxAdd}>add</button>
    </HomeWrapper>
  )
}

export default React.memo(HomeView)
