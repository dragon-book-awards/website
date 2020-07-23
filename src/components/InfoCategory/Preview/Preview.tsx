import { FC } from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import { FaInfoCircle } from 'react-icons/fa'

interface Props {
    name: string
    id: string
}

const Preview: FC<Props> = ({ name, id }) => {
    return (
        <Link
            href="/info-categories/[infoCategoryId]"
            as={`/info-categories/${id}`}
        >
            <a>
                <div className={styles.container}>
                    <FaInfoCircle />
                    {name}
                </div>
            </a>
        </Link>
    )
}

export default Preview
