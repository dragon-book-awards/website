import { FC } from 'react'
import { BotNav } from './BotNav'
import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { TopNav } from './TopNav'

const Layout: FC = ({ children }) => {
    return (
        <div>
            <TopNav />
            <Main>{children}</Main>
            <Footer />
            <BotNav />
        </div>
    )
}

export default Layout
