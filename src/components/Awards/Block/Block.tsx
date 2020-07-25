import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    awards: ReactElement
}

const Block: FC<Props> = ({ awards }) => {
    return (
        <div className={styles.container}>
            <h2>Awards</h2>
            {awards}
        </div>
    )
}

export default Block
