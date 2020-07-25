import { contentful, contentfulClient } from 'services'
import { InferGetStaticPropsType } from 'next'
import fclone from 'fclone'
import { CompetitionsBlock, Grid, CompetitionPreview } from 'components'

const CompetitionsPage = ({
    competitions
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <CompetitionsBlock
            competitions={
                <Grid>
                    {competitions.map(({ sys: { id }, fields: { name } }) => (
                        <CompetitionPreview name={name} id={id} />
                    ))}
                </Grid>
            }
        />
    )
}

export const getServerSideProps = async () => {
    const competitions = await contentful.retrieveCompetitions(contentfulClient)

    return { props: { competitions: fclone(competitions) } }
}

export default CompetitionsPage
