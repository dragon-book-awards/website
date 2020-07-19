import { AppProps } from 'next/app'
import { FC } from 'react'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default CustomApp
