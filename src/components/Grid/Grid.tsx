import { FC } from 'react'
import styles from './index.module.scss'

const Grid: FC = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default Grid
