import { FC } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
    fluid?: boolean
}

const Grid: FC<Props> = ({ fluid = false, children }) => {
    return (
        <div
            className={classNames(styles.container, { [styles.fluid]: fluid })}
        >
            {children}
        </div>
    )
}

export default Grid
