import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    name: string
    content?: ReactElement
    books: ReactElement
}

const Block: FC<Props> = ({ name, content, books }) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            {content}
            <br />
            <br />
            {books}
        </div>
    )
}

export default Block
