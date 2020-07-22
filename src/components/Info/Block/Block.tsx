import { FC, ReactNode } from 'react'
import styles from './index.module.scss'

interface Props {
    title: string
    content: ReactNode
}

const Block: FC<Props> = ({ title, content }) => {
    return (
        <article className={styles.container}>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{content}</div>
        </article>
    )
}

export default Block
