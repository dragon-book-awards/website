import { FC } from 'react'
import { BotNav } from './BotNav'
import { Footer } from 'components'
import { Main } from 'components'
import { TopNav } from './TopNav'
import styles from './index.module.scss'

const Layout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.topNav}>
                <TopNav />
            </div>
            <div className={styles.main}>
                <Main>{children}</Main>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
            <div className={styles.botNav}>
                <BotNav />
            </div>
        </div>
    )
}

export default Layout
