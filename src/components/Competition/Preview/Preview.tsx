import { FC } from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

interface Props {
    name: string
    id: string
}

const Preview: FC<Props> = ({ name, id }) => {
    return (
        <Link href="/competitions/[competitionId]" as={`/competitions/${id}`}>
            <a className={styles.container}>{name}</a>
        </Link>
    )
}

export default Preview
