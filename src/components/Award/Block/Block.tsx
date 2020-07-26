import { FC, ReactElement } from 'react'
import { FaAward } from 'react-icons/fa'
import styles from './index.module.scss'

interface Props {
    name: string
    winner?: ReactElement
}

const Block: FC<Props> = ({ name, winner }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                <FaAward />
                <br />
                {name}
            </h1>
            {winner ? (
                <div className={styles.winner}>{winner}</div>
            ) : (
                <h5>No winner yet...</h5>
            )}
        </div>
    )
}

export default Block
