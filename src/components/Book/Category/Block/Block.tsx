import { FC, ReactNode } from 'react'
import styles from './index.module.scss'

interface Props {
    name: string
    description?: string
    books: ReactNode
}

const Block: FC<Props> = ({ name, description, books }) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <p>{description}</p>
            <br />
            <br />
            {books}
        </div>
    )
}

export default Block
