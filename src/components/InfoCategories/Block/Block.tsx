import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    infoCategories: ReactElement
}

const Block: FC<Props> = ({ infoCategories }) => {
    return (
        <div className={styles.container}>
            <h2>Info</h2>
            {infoCategories}
        </div>
    )
}

export default Block
