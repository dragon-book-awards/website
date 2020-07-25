import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    infoCategories: ReactElement
}

const Block: FC<Props> = ({ infoCategories }) => {
    return (
        <div className={styles.container}>
            <h1>Info</h1>
            {infoCategories}
        </div>
    )
}

export default Block
