import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { contentful, contentfulClient } from 'services'
import fclone from 'fclone'
import { AwardBlock } from 'components/Award'
import { BookPreview, Image } from 'components'

const AwardPage = ({
    name,
    winner
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <AwardBlock
            name={name}
            winner={
                winner ? (
                    <BookPreview
                        id={winner?.sys.id}
                        coverImage={
                            <Image
                                src={winner?.fields.coverImage.fields.file.url}
                                alt={
                                    winner?.fields.coverImage.fields.description
                                }
                            />
                        }
                    />
                ) : null
            }
        />
    )
}

export const getServerSideProps = async ({
    params: { id }
}: GetServerSidePropsContext) => {
    if (typeof id === 'string') {
        const {
            fields: { name, winner }
        } = await contentful.retrieveAward(contentfulClient, id)

        return { props: { name, winner: fclone(winner) || null } }
    }

    throw new Error()
}

export default AwardPage
