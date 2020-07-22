import { InferGetServerSidePropsType } from 'next'
import { client, contentful } from 'services/contentful'
import InfoBlock from 'components/InfoBlock/InfoBlock'
import { RichText } from 'components/RichText'
import stringify from 'json-stringify-safe'

const HomePage = ({
    currentCompetition,
    archivedCompeitions,
    homePageInfo
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <InfoBlock
                title={homePageInfo.fields.title}
                content={
                    <RichText documentNode={homePageInfo.fields.content} />
                }
            />
        </>
    )
}

export const getServerSideProps = async () => {
    const {
        fields: { currentCompetition, archivedCompeitions, homePageInfo }
    } = await contentful.retrieveCurrentWebsite(client)

    return {
        props: {
            currentCompetition,
            archivedCompeitions: archivedCompeitions || null,
            homePageInfo
        }
    }
}

export default HomePage
