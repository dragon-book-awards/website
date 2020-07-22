import { FC } from 'react'
import styles from './index.module.scss'

const Main: FC = ({ children }) => {
    return <main className={styles.container}>{children}</main>
}

export default Main
