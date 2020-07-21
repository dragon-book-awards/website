import { AppProps } from 'next/app'
import { FC } from 'react'
import { Layout } from 'composites/Layout'
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
            `}</style>
        </Layout>
    )
}

export default CustomApp
