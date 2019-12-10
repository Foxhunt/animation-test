import App from "next/app"
import React from "react"
import Head from "next/head"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 body {
   width: 100vw;
   height: 100vh;

   margin: 0px;

   display: flex;
   align-items: center;
   justify-content: center;
 }
`

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <GlobalStyle />
                <Head>
                    <title>animation</title>
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}
