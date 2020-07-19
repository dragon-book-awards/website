import { FC } from 'react'

interface Props {
    border?: 'top' | 'bottom'
    fluid?: boolean
}

const NavBar: FC<Props> = ({ border = 'bottom', fluid = false }) => {
    return <p>NavBar</p>
}

export default NavBar
