import { FC } from 'react'
import { NavBar } from 'components'
import { NavLink } from 'components'
import { FaBook, FaInfo, FaArchive } from 'react-icons/fa'
import styles from './index.module.scss'

const BotNav: FC = () => {
    return (
        <NavBar borderDirection="top" fluid>
            <div className={styles.container}>
                <NavLink
                    icon={<FaBook />}
                    linkProps={{
                        href: '/competitions/current/book-categories'
                    }}
                />
                <NavLink
                    icon={<FaInfo />}
                    linkProps={{
                        href: '/competitions/current/info-categories'
                    }}
                />
                <NavLink
                    icon={<FaArchive />}
                    linkProps={{
                        href: '/competitions'
                    }}
                />
            </div>
        </NavBar>
    )
}

export default BotNav
