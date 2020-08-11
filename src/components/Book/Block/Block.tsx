import { FC, ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
    title: string
    author: string
    content: ReactElement
    coverImage: ReactElement
    pinImage?: ReactElement
    pinUrl?: string
    awards: ReactElement
}

const BookBlock: FC<Props> = ({
    title,
    author,
    content,
    coverImage,
    pinImage,
    pinUrl,
    awards
}) => {
    const pin = (
        <div className={styles.pin}>
            <div className={styles.pinImage}>{pinImage}</div>
            <h6>Read this book, earn a pin!</h6>
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.coverImageContainer}>
                {coverImage}
                {awards && (
                    <div className={styles.awardsContainer}>{awards}</div>
                )}
            </div>
            <div className={styles.content}>
                {pinImage ? (
                    pinUrl ? (
                        <a href={pinUrl} className={styles.pinAnchor}>
                            {pin}
                        </a>
                    ) : (
                        pin
                    )
                ) : null}
                <br />
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <p>
                        <i>{author}</i>
                    </p>
                </div>
                <br />
                <div className={styles.richText}>{content}</div>
            </div>
        </div>
    )
}

export default BookBlock
