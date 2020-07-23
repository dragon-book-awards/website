import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
    src: string
    alt: string
}

const Image: FC<Props> = ({ src, alt }) => {
    return (
        <div className={styles.container}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    )
}

export default Image
