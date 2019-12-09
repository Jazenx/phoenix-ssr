import React from 'react'
import styled from 'styled-components'
import NavTab from './../NavTab'
type HeaderNavPorps = {
  router?: any
}

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  border-bottom: 1px solid #e5e5e5;
  background: #ffffff;
  width: 100%;
`
const NavUl = styled.ul`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  list-style: none;
`

// TODO: nav可后端动态配置
const HeaderNav: React.FC<HeaderNavPorps> = () => {
  const TabList = [
    {
      key: 'home',
      name: '首页',
      pathName: '/'
    },
    {
      key: 'hot',
      name: '热榜',
      pathName: '/hot'
    },
    {
      key: 'auto',
      name: '汽车',
      pathName: '/auto'
    }
  ]
  return (
    <NavWrapper>
      <NavUl>
        {TabList.map(tab => (
          <NavTab {...tab} />
        ))}
      </NavUl>
    </NavWrapper>
  )
}

export default HeaderNav
