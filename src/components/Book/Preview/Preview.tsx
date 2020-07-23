import styles from './index.module.scss'
import { FC, ReactElement } from 'react'
import Link from 'next/link'

interface Props {
    coverImage: ReactElement
    id: string
}

const Preview: FC<Props> = ({ coverImage: CoverImage, id }) => {
    return (
        <Link href="/books/[bookId]" as={`/books/${id}`}>
            <a>
                <div className={styles.container}>
                    <div className={styles.coverImage}>{CoverImage}</div>
                </div>
            </a>
        </Link>
    )
}

export default Preview
