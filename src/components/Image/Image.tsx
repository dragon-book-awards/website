import { FC } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
    src: string
    alt: string
    pin: boolean
}

const Image: FC<Props> = ({ src, alt, pin }) => {
    return (
        <div className={classNames(styles.container, { [styles.pin]: pin })}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    )
}

export default Image
