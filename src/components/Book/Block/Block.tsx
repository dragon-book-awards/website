import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    title: string
    author: string
    content: ReactElement
    coverImage: ReactElement
    pinImage?: ReactElement
    awards: ReactElement
}

const BookBlock: FC<Props> = ({
    title,
    author,
    content,
    coverImage,
    pinImage,
    awards
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.coverImageContainer}>
                {coverImage}
                <br />
                {awards}
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p>{author}</p>
                </div>
                {pinImage && (
                    <div className={styles.pin}>
                        <div className={styles.pinImage}>{pinImage}</div>
                        <h5>Read this book, win a pin!</h5>
                    </div>
                )}
                {content}
            </div>
        </div>
    )
}

export default BookBlock
