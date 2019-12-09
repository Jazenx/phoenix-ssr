import React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'
import GlobalStyle from './../styles/GlobalStyle'
import { RouteTitles } from './../constants/RouteTitles'

const Layout = dynamic(() => import('./../components/Layout'))

class PhoenixApp extends App {
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    const title: string = RouteTitles[router.route]
    return (
      <div>
        <GlobalStyle />
        <Layout title={title}>
          {/* 把pageProps解构后传递给组件 */}
          <Component {...pageProps} />
        </Layout>
      </div>
    )
  }
}

export default React.memo(PhoenixApp)
