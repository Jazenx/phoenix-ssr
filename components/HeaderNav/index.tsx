import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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

const NavLi = styled.li`
  margin-right: 30px;
  border-bottom: 4px solid orange;
`

const NavLink = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: #333333;
  outline: none;
  cursor: pointer;
`

// TODO: nav可后端动态配置
const HeaderNav: React.FC = () => {
  return (
    <NavWrapper>
      <NavUl>
        <NavLi>
          <Link href="/" passHref>
            <NavLink target="_blank">首页</NavLink>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/cook" passHref>
            <NavLink target="_blank">美食</NavLink>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/goods" passHref>
            <NavLink target="_blank">好物</NavLink>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/auto" passHref>
            <NavLink target="_blank">汽车</NavLink>
          </Link>
        </NavLi>
      </NavUl>
      {/* <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
      |{' '}
      <Link href="/users">
        <a>Users List</a>
      </Link> */}
    </NavWrapper>
  )
}

export default HeaderNav
