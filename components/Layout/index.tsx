import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HeaderBanner = dynamic(() => import('./../HeaderBanner'))
const HeaderNav = dynamic(() => import('./../HeaderNav'))
const Footer = dynamic(() => import('./../Footer'))
const RightBar = dynamic(() => import('./../RightBar'))

type Props = {
  children: ReactNode
  title: string
}

const NextWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const ContainerWrapper = styled.div`
  min-height: 80vh;
  padding: 20px 0;
  text-align: center;
  background-color: #e2e2e2;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid red;
`

const Main = styled.div`
  width: 800px;
  background-color: pink;
`

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <NextWrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <header>
        <HeaderBanner />
        <HeaderNav />
      </header>
      <ContainerWrapper>
        <Container>
          <Main>{children}</Main>
          <RightBar />
        </Container>
      </ContainerWrapper>
      <footer>
        <Footer />
      </footer>
    </NextWrapper>
  )
}

export default React.memo(Layout)
