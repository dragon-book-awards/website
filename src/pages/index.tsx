import { InferGetServerSidePropsType } from 'next'
import { contentfulClient, contentful } from 'services'
import { InfoBlock, HeaderBlock, CompetitionPreview, Grid } from 'components'
import { RichText } from 'composites'
import Head from 'next/head'

const HomePage = ({
    currentCompetition,
    archivedCompeitions,
    homePageInfo
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Dragon Book Awards</title>
            </Head>
            <HeaderBlock>Dragon Book Awards</HeaderBlock>
            <InfoBlock
                title={homePageInfo.fields.title}
                content={
                    <>
                        <RichText documentNode={homePageInfo.fields.content} />
                        <br />
                        <br />

                        <CompetitionPreview
                            id={currentCompetition.sys.id}
                            name={currentCompetition.fields.name}
                        />
                    </>
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
            currentCompetition: currentCompetition,
            archivedCompeitions: archivedCompeitions || null,
            homePageInfo: homePageInfo
        }
    }
}

export default HomePage
