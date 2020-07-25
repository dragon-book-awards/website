import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    awards: ReactElement
}

const Block: FC<Props> = ({ awards }) => {
    return (
        <div className={styles.container}>
            <h1>Awards</h1>
            {awards}
        </div>
    )
}

export default Block
