import { FC, ReactNode } from 'react'
import styles from './index.module.scss'

interface Props {
    name: string
    description?: string
    info: ReactNode
}

const Block: FC<Props> = ({ name, description, info }) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <p>{description}</p>
            <br />
            <br />
            {info}
        </div>
    )
}

export default Block
