import { ReactElement, FC } from 'react'
import { FaAward } from 'react-icons/fa'
import styles from './index.module.scss'
import Link from 'next/link'

interface Props {
    name: string
    coverImage: ReactElement
    id: string
}

const Preview: FC<Props> = ({ name, coverImage: CoverImage, id }) => {
    return (
        <Link href="/awards/[awardId]" as={`/awards/${id}`}>
            <a>
                <div className={styles.container}>
                    <div className={styles.coverImage}>{CoverImage}</div>
                    <div className={styles.content}>
                        <span className={styles.icon}>
                            <FaAward />
                        </span>
                        {name}
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Preview
