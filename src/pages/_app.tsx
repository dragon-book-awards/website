import { AppProps } from 'next/app'
import { FC } from 'react'
import { Layout } from 'composites'
import 'styles/global.scss'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Roboto', sans-serif;
                }

                hr {
                    margin: 1rem 0;
                }

                ul,
                ol {
                    list-style-position: outside;
                    padding-left: 2rem;
                }

                blockquote {
                    margin: 1rem 0 1rem 1rem;
                    padding-left: 1rem;
                    border-left: 1px solid lightgrey;
                }

                code {
                    display: inline-block;
                    font-family: monospace;
                    font-size: 1rem;
                    padding: 0.5rem;
                    background-color: whitesmoke;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: 'Baloo Da 2';
                }

                h1 {
                    font-size: calc(3rem + 2vw);
                }

                h2 {
                    font-size: calc(2.5rem + 2vw);
                }

                h3 {
                    font-size: calc(1.5rem + 2vw);
                }

                h4 {
                    font-size: calc(1.5rem + 1vw);
                }

                h5 {
                    font-size: calc(1rem + 1vw);
                }

                h6 {
                    font-size: calc(0.5rem + 1vw);
                }
            `}</style>
        </Layout>
    )
}

export default CustomApp
