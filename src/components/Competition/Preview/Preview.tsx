import { FC } from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import { FaCalendar } from 'react-icons/fa'

interface Props {
    name: string
    id: string
}

const Preview: FC<Props> = ({ name, id }) => {
    return (
        <Link href="/competitions/[id]" as={`/competitions/${id}`}>
            <a className={styles.container}>
                <FaCalendar />
                {name}
            </a>
        </Link>
    )
}

export default Preview
