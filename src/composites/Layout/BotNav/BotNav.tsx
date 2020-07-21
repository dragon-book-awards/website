import { FC } from 'react'
import { NavBar } from 'components/NavBar'
import NavLink from 'components/NavLink/NavLink'
import { FaBook, FaInfo, FaArchive } from 'react-icons/fa'
import styles from './index.module.scss'

const BotNav: FC = () => {
    return (
        <NavBar borderDirection="top" fluid>
            <div className={styles.container}>
                <NavLink
                    icon={<FaBook />}
                    linkProps={{ href: '/books', as: '/books' }}
                />
                <NavLink
                    icon={<FaInfo />}
                    linkProps={{ href: '/info', as: '/info' }}
                />
                <NavLink
                    icon={<FaArchive />}
                    linkProps={{ href: '/archive', as: '/archive' }}
                />
            </div>
        </NavBar>
    )
}

export default BotNav
