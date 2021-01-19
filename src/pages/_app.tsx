import React from "react";
import Head from "next/head";

import GlobalWrapper from "containers/global";
import App from "next/app";
interface IAppProps {
  Component: React.ComponentType;
  pageProps: object;
}

class Application extends App<IAppProps> {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Nikan dalvand | Senior frontend developer</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <GlobalWrapper>
          <Component {...pageProps} />
        </GlobalWrapper>
      </React.Fragment>
    );
  }
}

export default Application;
