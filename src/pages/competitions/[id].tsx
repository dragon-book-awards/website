import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { contentful, contentfulClient } from 'services'
import fclone from 'fclone'
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
    awards
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{name} Competition</title>
            </Head>
            <HeaderBlock>{name}</HeaderBlock>
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
                                                winner?.fields.coverImage.fields
                                                    .file.url
                                            }
                                            alt={
                                                winner?.fields.coverImage.fields
                                                    .description
                                            }
                                        />
                                    }
                                />
                            )
                        )}
                    </Grid>
                }
            />

            <br />
            <br />
        </>
    )
}

export const getServerSideProps = async ({
    params: { id }
}: GetStaticPropsContext) => {
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
                bookCategories: fclone(bookCategories),
                infoCategories: fclone(infoCategories),
                awards: fclone(awards)
            }
        }
    }

    throw new Error()
}

export default CompetitionPage
