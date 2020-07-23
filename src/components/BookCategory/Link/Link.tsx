import { FC } from 'react'
import { FaBook } from 'react-icons/fa'
import NextLink from 'next/link'
import styles from './index.module.scss'

interface Props {
    title: string
    id: string
}

const Link: FC<Props> = ({ title, id }) => {
    return (
        <NextLink
            href="/book-categories/[bookCategoryId]"
            as={`/book-categories/${id}`}
        >
            <a className={styles.link}>
                <FaBook />
                &nbsp;
                <span>{title}</span>
            </a>
        </NextLink>
    )
}

export default Link
