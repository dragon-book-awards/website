import { FC } from 'react'
import { BotNav } from './BotNav'
import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { TopNav } from './TopNav'
import styles from './index.module.scss'

const Layout: FC = ({ children }) => {
    return (
        <div>
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
