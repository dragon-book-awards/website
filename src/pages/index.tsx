import { FC } from 'react'
import { GetServerSideProps } from 'next'
import { client, contentful } from 'services/contentful'

const HomePage: FC = () => {
    return (
        <>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
            <p>
                home
                <br />
            </p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(await contentful.retrieveCurrentWebsite(client))

    return { props: {} }
}

export default HomePage
