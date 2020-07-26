import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { contentfulClient, contentful } from 'services'
import { InfoBlock } from 'components'
import { RichText } from 'composites'
import fclone from 'fclone'
import Head from 'next/head'

const InfoPage = ({
    title,
    content
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <InfoBlock
                title={title}
                content={<RichText documentNode={content} />}
            />
        </>
    )
}

export const getServerSideProps = async ({
    params: { id }
}: GetServerSidePropsContext) => {
    if (typeof id === 'string') {
        const {
            fields: { title, content }
        } = await contentful.retrieveInfo(contentfulClient, id)

        return { props: { title, content: fclone(content) } }
    }

    throw new Error()
}

export default InfoPage
