import { FC } from 'react'
import { FaInfoCircle, FaAward } from 'react-icons/fa'
import NextLink from 'next/link'
import styles from './index.module.scss'

interface Props {
    title: string
    id: string
}

const Link: FC<Props> = ({ title, id }) => {
    return (
        <NextLink href="/award/[awardId]" as={`/award/${id}`}>
            <a className={styles.link}>
                <FaAward />
                &nbsp;
                <span>{title}</span>
            </a>
        </NextLink>
    )
}

export default Link
