import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter, Router } from 'next/router'

type NavTabPorps = {
  name: string
  pathName: string
  router?: any
}

type PropsWithRouter = NavTabPorps & {
  router: Router
}

type NavLiProps = {
  readonly selected: boolean
}

const NavLi = styled.li<NavLiProps>`
  min-width: 48px;
  margin-right: 30px;
  border-bottom: ${props => props.selected && '4px solid orange'};
  &:hover {
    border-bottom: 4px solid orange;
    & > a {
      color: orange;
    }
  }
  & > a {
    padding: 0 10px;
    color: ${props => (props.selected ? 'orange' : '#333333')};
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
`

const NavTab: React.FC<NavTabPorps> = ({ name, pathName, router }) => {
  const { pathname } = router
  return (
    <NavLi selected={pathname === pathName}>
      <Link href={pathName} passHref>
        <a>{name}</a>
      </Link>
    </NavLi>
  )
}

export default withRouter<PropsWithRouter>(NavTab)
