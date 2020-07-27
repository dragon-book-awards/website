import { contentful, contentfulClient } from 'services'
import { InferGetStaticPropsType } from 'next'
import {
    Grid,
    CompetitionPreview,
    CompetitionCompetitionsBlock
} from 'components'
import Head from 'next/head'

const CompetitionsPage = ({
    competitions
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Archive</title>
            </Head>
            <CompetitionCompetitionsBlock
                competitions={
                    <Grid>
                        {competitions ? (
                            competitions.map(
                                ({ sys: { id }, fields: { name } }) => (
                                    <CompetitionPreview name={name} id={id} />
                                )
                            )
                        ) : (
                            <p>No competitions archived yet...</p>
                        )}
                    </Grid>
                }
            />
        </>
    )
}

export const getServerSideProps = async () => {
    const competitions = await contentful.retrieveCompetitions(contentfulClient)

    return { props: { competitions: competitions || null } }
}

export default CompetitionsPage
