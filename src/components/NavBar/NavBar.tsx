import { FC } from 'react'

enum Border {
    top,
    bottom
}

interface Props {
    border?: Border
    fluid?: boolean
}

const NavBar: FC<Props> = ({ border = 'top', fluid = false }) => {
    return <p>NavBar</p>
}

export default NavBar
