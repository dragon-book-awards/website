import { FC, ReactElement } from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import { FaBook } from 'react-icons/fa'

interface Props {
    coverImages: ReactElement[]
    name: string
    id: string
}
const Preview: FC<Props> = ({ coverImages, name, id }) => {
    return (
        <Link href="/book-categories/[id]" as={`/book-categories/${id}`}>
            <a className={styles.container}>
                <div className={styles.coverImages}>
                    {coverImages.slice(0, 5).map((element) => (
                        <span key={element.key} className={styles.coverImage}>
                            {element}
                        </span>
                    ))}
                </div>
                <p className={styles.content}>
                    <FaBook />
                    {name}
                </p>
            </a>
        </Link>
    )
}

export default Preview
