import { InferGetServerSidePropsType } from 'next'
import { contentfulClient, contentful } from 'services'
import shuffle from 'shuffle-array'
import { InfoBlock, HeaderBlock, HomeSplash } from 'components'
import { RichText } from 'composites'
import Head from 'next/head'

const HomePage = ({
    homePageInfo,
    homeSplashImageUrls
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Dragon Book Awards</title>
            </Head>
            <HomeSplash imageUrls={homeSplashImageUrls} />
            <HeaderBlock>Dragon Book Awards</HeaderBlock>
            <InfoBlock
                title={homePageInfo.fields.title}
                content={
                    <RichText documentNode={homePageInfo.fields.content} />
                }
            />
        </>
    )
}

export const getServerSideProps = async () => {
    const {
        fields: { currentCompetition, archivedCompeitions, homePageInfo }
    } = await contentful.retrieveCurrentWebsite(contentfulClient)

    // Get book cover image urls from current competition
    let currentCompetitionBookCoverImageUrls = shuffle(
        [].concat.apply(
            [],
            currentCompetition.fields.bookCategories.map(
                ({ fields: { books } }) => {
                    return books.map(
                        ({
                            fields: {
                                coverImage: {
                                    fields: {
                                        file: { url }
                                    }
                                }
                            }
                        }) => url
                    )
                }
            )
        )
    )

    // Ensure there are enough elements in the array
    while (currentCompetitionBookCoverImageUrls.length < 250) {
        currentCompetitionBookCoverImageUrls = currentCompetitionBookCoverImageUrls.concat(
            currentCompetitionBookCoverImageUrls
        )
    }

    return {
        props: {
            currentCompetition: currentCompetition,
            archivedCompeitions: archivedCompeitions || null,
            homePageInfo: homePageInfo,
            homeSplashImageUrls: currentCompetitionBookCoverImageUrls
        }
    }
}

export default HomePage
