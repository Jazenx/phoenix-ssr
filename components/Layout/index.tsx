import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HeaderBanner = dynamic(() => import('./../HeaderBanner'))
const HeaderNav = dynamic(() => import('./../HeaderNav'))

type Props = {
  children: ReactNode
  title: string
}

const FuckWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  color: white;
`

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <HeaderBanner />
        <HeaderNav />
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
