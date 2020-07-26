import { FC } from 'react'
import styles from './index.module.scss'

const HeaderBlock: FC = ({ children }) => {
    return <h1 className={styles.container}>{children}</h1>
}

export default HeaderBlock
