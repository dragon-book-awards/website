import { ReactNode, FC } from 'react'
import NextLink, { LinkProps } from 'next/link'
import styles from './index.module.scss'

interface Props {
    icon?: ReactNode
    title?: string
    linkProps: LinkProps
}

const Link: FC<Props> = ({ icon, title, linkProps, children }) => {
    return (
        <NextLink {...linkProps}>
            <a className={styles.container}>
                {icon}
                {title}
                {children}
            </a>
        </NextLink>
    )
}

export default Link
