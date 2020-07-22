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
            `}</style>
        </Layout>
    )
}

export default CustomApp
