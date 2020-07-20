import { FC } from 'react'
import { NavBar } from 'components/NavBar'
import NavLink from 'components/NavLink/NavLink'
import { FaBook, FaInfo, FaArchive } from 'react-icons/fa'
import styles from './index.module.scss'

const TopNav: FC = () => {
    return (
        <NavBar>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <NavLink linkProps={{ href: '/', as: '/' }}>
                        <img
                            className={styles.logo}
                            src="/logo.png"
                            alt="Dragon Book Awards Logo"
                        />
                    </NavLink>
                </div>
                <div className={styles.rightContainer}>
                    <NavLink
                        icon={<FaBook />}
                        title="Books"
                        linkProps={{ href: '/books', as: '/books' }}
                    />
                    <NavLink
                        icon={<FaInfo />}
                        title="Info"
                        linkProps={{ href: '/info', as: '/info' }}
                    />
                    <NavLink
                        icon={<FaArchive />}
                        title="Archive"
                        linkProps={{ href: '/archive', as: '/archive' }}
                    />
                </div>
            </div>
        </NavBar>
    )
}

export default TopNav
