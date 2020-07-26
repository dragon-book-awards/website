import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    bookCategories: ReactElement
}

const Block: FC<Props> = ({ bookCategories }) => {
    return (
        <div className={styles.container}>
            <h2>Books</h2>
            {bookCategories}
        </div>
    )
}

export default Block
