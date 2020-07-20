import { ReactNode, FC } from 'react'
import Link, { LinkProps } from 'next/link'
import styles from './index.module.scss'

interface Props {
    icon?: ReactNode
    title?: string
    linkProps: LinkProps
}

const NavLink: FC<Props> = ({ icon, title, linkProps, children }) => {
    return (
        <Link {...linkProps}>
            <a className={styles.container}>
                {icon}
                {title}
                {children}
            </a>
        </Link>
    )
}

export default NavLink
