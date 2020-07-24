import { FC } from 'react'
import { FaCalendar } from 'react-icons/fa'
import NextLink from 'next/link'
import styles from './index.module.scss'

interface Props {
    title: string
    id: string
}

const Link: FC<Props> = ({ title, id }) => {
    return (
        <NextLink href="/competitions/[id]" as={`/competitions/${id}`}>
            <a className={styles.link}>
                <FaCalendar />
                &nbsp;
                <span>{title}</span>
            </a>
        </NextLink>
    )
}

export default Link
