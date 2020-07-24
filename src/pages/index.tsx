import { InferGetServerSidePropsType } from 'next'
import { contentfulClient, contentful } from 'services'
import { InfoBlock } from 'components'
import { RichText } from 'composites'
import fclone from 'fclone'

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
    } = await contentful.retrieveCurrentWebsite(contentfulClient)

    return {
        props: {
            currentCompetition: fclone(currentCompetition),
            archivedCompeitions: archivedCompeitions || null,
            homePageInfo: fclone(homePageInfo)
        }
    }
}

export default HomePage
