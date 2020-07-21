import { FC } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { client, contentful } from 'services/contentful'

const HomePage = ({
    info
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <p>Hi</p>
}

export const getServerSideProps = async () => {
    const {
        fields: { homePageInfo }
    } = await contentful.retrieveCurrentWebsite(client)

    return { props: { info: homePageInfo } }
}

export default HomePage
