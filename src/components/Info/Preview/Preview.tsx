import { FC } from 'react'
import Link from 'next/link'
import { FaInfoCircle } from 'react-icons/fa'
import styles from './index.module.scss'

interface Props {
    title: string
    id: string
}

const Preview: FC<Props> = ({ title, id }) => {
    return (
        <Link href="/info/[id]" as={`/info/${id}`}>
            <a className={styles.container}>
                <FaInfoCircle />
                {title}
            </a>
        </Link>
    )
}

export default Preview
