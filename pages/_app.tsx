import React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'
import GlobalStyle from './../styles/GlobalStyle'

const Layout = dynamic(() => import('./../components/Layout'))

export default class PhoenixApp extends App {
  // static async getInitialProps({ Component: React.FC, router, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <GlobalStyle />
        <Layout title="Rank">
          {/* 把pageProps解构后传递给组件 */}
          <Component {...pageProps} />
        </Layout>
      </div>
    )
  }
}
