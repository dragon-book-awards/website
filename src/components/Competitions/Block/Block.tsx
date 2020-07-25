import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    competitions: ReactElement
}

const Competitions: FC<Props> = ({ competitions }) => {
    return (
        <div className={styles.container}>
            <h1>Competitions</h1>
            {competitions}
        </div>
    )
}

export default Competitions
