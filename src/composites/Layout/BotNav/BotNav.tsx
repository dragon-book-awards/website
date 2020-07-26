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
                        href: '/competitions/[id]',
                        as:
                            '/competitions/current?hideInfo=true&hideAwards=true'
                    }}
                />
                <NavLink
                    icon={<FaInfo />}
                    linkProps={{
                        href: '/competitions/[id]',
                        as:
                            '/competitions/current?hideBooks=true&hideAwards=true'
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
