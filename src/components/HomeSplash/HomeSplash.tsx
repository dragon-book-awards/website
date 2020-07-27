import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
    imageUrls: string[]
}

const HomeSplash: FC<Props> = ({ imageUrls }) => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {imageUrls.map((imageUrl) => (
                    <img src={imageUrl} />
                ))}
            </div>
        </div>
    )
}

export default HomeSplash
