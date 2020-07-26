import { InferGetStaticPropsType, GetServerSidePropsContext } from 'next'
import { contentful, contentfulClient } from 'services'
import { InfoCategoryBlock, Grid, InfoPreview } from 'components'
import Head from 'next/head'

const InfoCategoryPage = ({
    name,
    info,
    description
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{name} Info</title>
            </Head>
            <InfoCategoryBlock
                name={name}
                description={description}
                info={
                    <Grid>
                        {info.map(({ sys: { id }, fields: { title } }) => (
                            <InfoPreview title={title} id={id} />
                        ))}
                    </Grid>
                }
            />
        </>
    )
}

export const getServerSideProps = async ({
    params: { id }
}: GetServerSidePropsContext) => {
    if (typeof id === 'string') {
        const {
            fields: { name, description, info }
        } = await contentful.retrieveInfoCategory(contentfulClient, id)

        return {
            props: {
                name,
                description: description || null,
                info
            }
        }
    }

    throw new Error()
}

export default InfoCategoryPage
