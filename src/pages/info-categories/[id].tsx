import { InferGetStaticPropsType, GetServerSidePropsContext } from 'next'
import { contentful, contentfulClient } from 'services'
import { InfoCategoryBlock, Grid, InfoPreview } from 'components'
import Head from 'next/head'
import { RichText } from 'composites'

const InfoCategoryPage = ({
    name,
    info,
    content
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{name} Info</title>
            </Head>
            <InfoCategoryBlock
                name={name}
                content={<RichText documentNode={content} />}
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
            fields: { name, content, info }
        } = await contentful.retrieveInfoCategory(contentfulClient, id)

        return {
            props: {
                name,
                content: content || null,
                info
            }
        }
    }

    throw new Error()
}

export default InfoCategoryPage
