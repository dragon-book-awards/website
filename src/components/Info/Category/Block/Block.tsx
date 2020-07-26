import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    name: string
    content?: ReactElement
    info: ReactElement
}

const Block: FC<Props> = ({ name, content, info }) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            {content}
            <br />
            <br />
            {info}
        </div>
    )
}

export default Block
