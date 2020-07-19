import { FC } from 'react'
import styles from './index.module.scss'
import { NavBar } from 'components/NavBar'
import { FaBook, FaInfoCircle, FaFileArchive } from 'react-icons/fa'
import NavLink from 'components/NavLink/NavLink'
import { Main } from 'components/Main'
import { Footer } from 'components/Footer'

const Layout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.topNav}>
                <NavBar>
                    <NavLink
                        icon={<FaBook />}
                        title="Books"
                        linkProps={{ href: '/books', as: '/books' }}
                    />
                    <NavLink
                        icon={<FaInfoCircle />}
                        title="Info"
                        linkProps={{ href: '/info', as: '/info' }}
                    />
                    <NavLink
                        icon={<FaFileArchive />}
                        title="Archive"
                        linkProps={{ href: '/archive', as: '/archive' }}
                    />
                </NavBar>
            </div>
            <div className={styles.main}>
                <Main>{children}</Main>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
            <div className={styles.botNav}>
                <NavBar border="top" fluid={true}>
                    <NavLink
                        icon={<FaBook />}
                        linkProps={{ href: '/books', as: '/books' }}
                    />
                    <NavLink
                        icon={<FaInfoCircle />}
                        linkProps={{ href: '/info', as: '/info' }}
                    />
                    <NavLink
                        icon={<FaFileArchive />}
                        linkProps={{ href: '/archive', as: '/archive' }}
                    />
                </NavBar>
            </div>
        </div>
    )
}

export default Layout
