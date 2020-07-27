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
            <div className={styles.coverImageContainer}>{coverImage}</div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <p>
                        <i>{author}</i>
                    </p>
                </div>
                <br />
                {pinImage && (
                    <div className={styles.centerContainer}>
                        <div className={styles.pin}>
                            <div className={styles.pinImage}>{pinImage}</div>
                            <h6>Read this book, earn a pin!</h6>
                        </div>
                    </div>
                )}
                <br />
                {awards && (
                    <div className={styles.centerContainer}>{awards}</div>
                )}
                <br />
                <div className={styles.richText}>{content}</div>
            </div>
        </div>
    )
}

export default BookBlock
