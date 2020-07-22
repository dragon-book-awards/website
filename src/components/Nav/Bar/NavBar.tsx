import { FC } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
    borderDirection?: 'top' | 'bottom'
    fluid?: boolean
}

const Bar: FC<Props> = ({
    borderDirection = 'bottom',
    fluid = false,
    children
}) => {
    const containerClassName = classNames(
        [styles.container],
        [styles[`border-${borderDirection}`]],
        { [styles.fluid]: fluid }
    )

    return <div className={containerClassName}>{children}</div>
}

export default Bar
