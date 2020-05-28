import React from 'react';
import App from "next/app";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";

const theme = createMuiTheme();

class MyApp extends App {
    public componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    public render() {
        const {pageProps, Component} = this.props;

        return (
            <>
                <Head>
                    <title>Feeds challenge</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}

export default MyApp;
