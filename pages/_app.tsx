import React from 'react'
import App from 'next/app'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from './../redux/store'
import dynamic from 'next/dynamic'
import GlobalStyle from './../styles/GlobalStyle'
import { RouteTitles } from './../constants/RouteTitles'

const Layout = dynamic(() => import('./../components/Layout'))

interface Props {
  store: Store
}
class PhoenixApp extends App<Props> {
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router, store } = this.props
    const title: string = RouteTitles[router.route]
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Layout title={title}>
          {/* 把pageProps解构后传递给组件 */}
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga(React.memo(PhoenixApp)))
