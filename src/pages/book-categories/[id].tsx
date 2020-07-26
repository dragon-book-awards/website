import { contentful, contentfulClient } from 'services'
import { InferGetStaticPropsType, GetServerSidePropsContext } from 'next'
import { BookCategoryBlock, Grid, BookPreview, Image } from 'components'
import Head from 'next/head'

const BookCategoryPage = ({
    name,
    description,
    books
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{name} Books</title>
            </Head>
            <BookCategoryBlock
                name={name}
                description={description}
                books={
                    <Grid>
                        {books.map(
                            ({
                                sys: { id },
                                fields: {
                                    coverImage: {
                                        fields: {
                                            file: { url },
                                            description
                                        }
                                    }
                                }
                            }) => (
                                <BookPreview
                                    id={id}
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
}: GetServerSidePropsContext) => {
    if (typeof id === 'string') {
        const {
            fields: { name, description, books }
        } = await contentful.retrieveBookCategory(contentfulClient, id)

        return {
            props: {
                name,
                description: description || null,
                books
            }
        }
    }

    throw new Error()
}

export default BookCategoryPage
