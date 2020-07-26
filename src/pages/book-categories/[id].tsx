import { contentful, contentfulClient } from 'services'
import { InferGetStaticPropsType, GetServerSidePropsContext } from 'next'
import { BookCategoryBlock, Grid, BookPreview, Image } from 'components'
import Head from 'next/head'
import { RichText } from 'composites'

const BookCategoryPage = ({
    name,
    content,
    books
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{name} Books</title>
            </Head>
            <BookCategoryBlock
                name={name}
                content={<RichText documentNode={content} />}
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
            fields: { name, content, books }
        } = await contentful.retrieveBookCategory(contentfulClient, id)

        return {
            props: {
                name,
                content: content || null,
                books
            }
        }
    }

    throw new Error()
}

export default BookCategoryPage
