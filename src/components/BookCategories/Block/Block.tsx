import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    bookCategories: ReactElement
}

const Block: FC<Props> = ({ bookCategories }) => {
    return (
        <div className={styles.container}>
            <h1>Books</h1>
            {bookCategories}
        </div>
    )
}

export default Block
