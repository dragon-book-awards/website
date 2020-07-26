import { contentful, contentfulClient } from 'services'
import { InferGetStaticPropsType } from 'next'
import { CompetitionsBlock, Grid, CompetitionPreview } from 'components'
import Head from 'next/head'

const CompetitionsPage = ({
    competitions
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Archive</title>
            </Head>
            <CompetitionsBlock
                competitions={
                    <Grid>
                        {competitions.map(
                            ({ sys: { id }, fields: { name } }) => (
                                <CompetitionPreview name={name} id={id} />
                            )
                        )}
                    </Grid>
                }
            />
        </>
    )
}

export const getServerSideProps = async () => {
    const competitions = await contentful.retrieveCompetitions(contentfulClient)

    return { props: { competitions } }
}

export default CompetitionsPage
