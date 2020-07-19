import { AppProps } from 'next/app'
import { FC } from 'react'
import { Layout } from 'composites/Layout'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default CustomApp
