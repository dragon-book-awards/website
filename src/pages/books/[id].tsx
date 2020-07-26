import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { contentful, contentfulClient } from 'services'
import { BookBlock, Image, Grid, AwardPreview } from 'components'
import { RichText } from 'composites'
import Head from 'next/head'

const BookPage = ({
    title,
    author,
    content,
    coverImage,
    pinImage,
    awards
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <BookBlock
                title={title}
                author={author}
                content={<RichText documentNode={content} />}
                coverImage={
                    <Image
                        src={coverImage.fields.file.url}
                        alt={coverImage.fields.description}
                    />
                }
                pinImage={
                    pinImage && (
                        <Image
                            src={pinImage.fields.file.url}
                            alt={pinImage.fields.description}
                            pin
                        />
                    )
                }
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
                                    key={id}
                                    id={id}
                                    coverImage={
                                        <Image src={url} alt={description} />
                                    }
                                    name={name}
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
            fields: { title, author, content, coverImage, pinImage }
        } = await contentful.retrieveBook(contentfulClient, id)

        const awards = await contentful.retrieveBookAwards(contentfulClient, id)

        return {
            props: {
                title,
                author,
                content,
                coverImage,
                pinImage: pinImage || null,
                awards
            }
        }
    }

    throw new Error()
}

export default BookPage
