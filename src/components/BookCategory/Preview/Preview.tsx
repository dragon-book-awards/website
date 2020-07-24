import { FC, ReactElement } from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

interface Props {
    coverImages: ReactElement[]
    name: string
    id: string
}
const Preview: FC<Props> = ({ coverImages, name, id }) => {
    return (
        <Link
            href="/book-categories/[bookCategoryId]"
            as={`/book-categories/${id}`}
        >
            <a className={styles.container}>
                <div className={styles.coverImages}>
                    {coverImages.slice(0, 5).map((element) => (
                        <span key={element.key} className={styles.coverImage}>
                            {element}
                        </span>
                    ))}
                </div>
                <p className={styles.content}>{name}</p>
            </a>
        </Link>
    )
}

export default Preview