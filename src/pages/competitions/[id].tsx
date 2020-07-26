import { InferGetStaticPropsType, GetServerSidePropsContext } from 'next'
import { contentful, contentfulClient } from 'services'
import {
    InfoCategoryPreview,
    Grid,
    BookCategoriesBlock,
    BookCategoryPreview,
    InfoCategoriesBlock,
    HeaderBlock,
    Image,
    AwardPreview
} from 'components'
import { AwardsBlock } from 'components/Awards'
import Head from 'next/head'

const CompetitionPage = ({
    name,
    bookCategories,
    infoCategories,
    awards,
    hideBooks,
    hideInfo,
    hideAwards
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{name} Competition</title>
            </Head>
            <HeaderBlock>{name}</HeaderBlock>
            {hideBooks !== 'true' && (
                <BookCategoriesBlock
                    bookCategories={
                        <Grid>
                            {bookCategories.map(
                                ({ sys: { id }, fields: { name, books } }) => (
                                    <BookCategoryPreview
                                        name={name}
                                        id={id}
                                        coverImages={books.map(
                                            ({
                                                fields: {
                                                    coverImage: {
                                                        fields: {
                                                            description,
                                                            file: { url }
                                                        }
                                                    }
                                                }
                                            }) => (
                                                <Image
                                                    src={url}
                                                    alt={description}
                                                />
                                            )
                                        )}
                                    />
                                )
                            )}
                        </Grid>
                    }
                />
            )}
            {hideInfo !== 'true' && (
                <InfoCategoriesBlock
                    infoCategories={
                        <Grid>
                            {infoCategories.map(
                                ({ sys: { id }, fields: { name } }) => (
                                    <InfoCategoryPreview name={name} id={id} />
                                )
                            )}
                        </Grid>
                    }
                />
            )}
            {hideAwards !== 'true' && (
                <AwardsBlock
                    awards={
                        <Grid>
                            {awards.map(
                                ({ sys: { id }, fields: { name, winner } }) => (
                                    <AwardPreview
                                        id={id}
                                        name={name}
                                        coverImage={
                                            <Image
                                                src={
                                                    winner?.fields.coverImage
                                                        .fields.file.url
                                                }
                                                alt={
                                                    winner?.fields.coverImage
                                                        .fields.description
                                                }
                                            />
                                        }
                                    />
                                )
                            )}
                        </Grid>
                    }
                />
            )}
            <br />
            <br />
        </>
    )
}

export const getServerSideProps = async ({
    params: { id },
    query: { hideBooks, hideAwards, hideInfo }
}: GetServerSidePropsContext) => {
    if (typeof id === 'string') {
        const {
            fields: { name, bookCategories, infoCategories, awards }
        } =
            id === 'current'
                ? await contentful.retrieveCurrentCompetition(contentfulClient)
                : await contentful.retrieveCompetition(contentfulClient, id)

        return {
            props: {
                name,
                bookCategories,
                infoCategories,
                awards,
                hideBooks: hideBooks || null,
                hideAwards: hideAwards || null,
                hideInfo: hideInfo || null
            }
        }
    }

    throw new Error()
}

export default CompetitionPage
