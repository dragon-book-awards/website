import { FC } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import NextLink from 'next/link'
import styles from './index.module.scss'

interface Props {
    title: string
    id: string
}

const Link: FC<Props> = ({ title, id }) => {
    return (
        <NextLink href="/info/[id]" as={`/info/${id}`}>
            <a className={styles.link}>
                <FaInfoCircle />
                &nbsp;
                <span>{title}</span>
            </a>
        </NextLink>
    )
}

export default Link
