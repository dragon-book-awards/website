import { InferGetServerSidePropsType } from 'next'
import { client, contentful } from 'services/contentful'

const HomePage = ({
    currentWebsite
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <p>{JSON.stringify(currentWebsite, null, 4)}</p>
}

export const getServerSideProps = async () => {
    const currentWebsite = await contentful.retrieveCurrentWebsite(client)

    return { props: { currentWebsite } }
}

export default HomePage
