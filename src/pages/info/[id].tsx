import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { contentfulClient, contentful } from 'services'
import { InfoBlock } from 'components'
import { RichText } from 'composites'

const InfoPage = ({
    title,
    content
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <InfoBlock
            title={title}
            content={<RichText documentNode={content} />}
        />
    )
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const {
        params: { id }
    } = context

    if (typeof id === 'string') {
        const {
            fields: { title, content }
        } = await contentful.retrieveInfo(contentfulClient, id)

        return { props: { title, content } }
    }

    throw new Error()
}

export default InfoPage
