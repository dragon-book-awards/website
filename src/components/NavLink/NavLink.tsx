import { ReactNode, FC } from 'react'
import { LinkProps } from 'next/link'

interface Props {
    icon?: ReactNode
    title?: string
    linkProps: LinkProps
}

const NavLink: FC<Props> = ({ icon, title, linkProps }) => {
    return <p>NavLink</p>
}

export default NavLink
