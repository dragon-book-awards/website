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

const CompetitionPage = ({
    name,
    bookCategories,
    infoCategories,
    awards
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <HeaderBlock>{name}</HeaderBlock>
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
            <AwardsBlock
                awards={
                    <Grid>
                        {awards.map(
                            ({
                                sys: { id },
                                fields: {
                                    name,
                                    winner: {
                                        fields: {
                                            coverImage: {
                                                fields: {
                                                    file: { url },
                                                    description
                                                }
                                            }
                                        }
                                    }
                                }
                            }) => (
                                <AwardPreview
                                    id={id}
                                    name={name}
                                    coverImage={
                                        <Image src={url} alt={description} />
                                    }
                                />
                            )
                        )}
                    </Grid>
                }
            />
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