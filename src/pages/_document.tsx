import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    public static getInitialProps = async (ctx: any) => {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [
                <React.Fragment key='styles'>
                    {initialProps.styles}
                    {sheets.getStyleElement()}
                </React.Fragment>,
            ],
        };
    };

    public render() {
        return (
            <html lang='en'>
            <Head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
                />
                <meta name='theme-color' content='#2d526d' />
                <meta name='description' content='nextjs app' />
                <meta name='robots' content='all,follow' />
                <link rel='icon' type='image/x-icon' href='/logo.png' sizes='16x16' />
                <style>
                    {`
                       #__next {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        }
                        * {
                          margin: 0;
                          padding: 0;
                          box-sizing: border-box;
                          font-family: sans-serif;
                        }
                    `}
                </style>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}

export default MyDocument;
