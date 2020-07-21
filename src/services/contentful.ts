import {
    createClient,
    ContentfulClientApi,
    EntryCollection,
    ContentfulCollection
} from 'contentful'
import {
    IWebsite,
    ICompetition,
    IBookCategory,
    IInfoCategory,
    IBook,
    IInfo
} from '../../@types/generated/contentful'

export const contentfulDeliveryClient = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT
})

export const retrieveCurrentWebsite = async (client: ContentfulClientApi) => {
    const {
        items: [website]
    }: ContentfulCollection<IWebsite> = await client.getEntries({
        content_type: 'website',
        'fields.active': true
    })

    return website
}

export const retrieveCurrentCompetition = async (
    client: ContentfulClientApi
) => {
    const {
        fields: { currentCompetition }
    } = await retrieveCurrentWebsite(client)

    return currentCompetition
}

export const retrieveCompetitions = async (client: ContentfulClientApi) => {
    const {
        items: competitions
    }: ContentfulCollection<ICompetition> = await client.getEntries({
        content_type: 'competition'
    })

    return competitions
}

export const retrieveCompetition = async (
    client: ContentfulClientApi,
    competitionId: string
) => {
    const {
        items: [competition]
    }: ContentfulCollection<ICompetition> = await client.getEntries({
        content_type: 'competition',
        'sys.id': competitionId,
        limit: 1
    })

    return competition
}

export const retrieveBookCategory = async (
    client: ContentfulClientApi,
    bookCategoryId: string
) => {
    const {
        items: [bookCategory]
    }: ContentfulCollection<IBookCategory> = await client.getEntries({
        content_type: 'bookCategory',
        'sys.id': bookCategoryId,
        limit: 1
    })

    return bookCategory
}

export const retrieveInfoCategory = async (
    client: ContentfulClientApi,
    infoCategoryId: string
) => {
    const {
        items: [infoCategory]
    }: ContentfulCollection<IInfoCategory> = await client.getEntries({
        content_type: 'infoCategory',
        'sys.id': infoCategoryId,
        limit: 1
    })

    return infoCategory
}

export const retrieveBook = async (
    client: ContentfulClientApi,
    bookId: string
) => {
    const {
        items: [book]
    }: ContentfulCollection<IBook> = await client.getEntries({
        content_type: 'book',
        'sys.id': bookId,
        limit: 1
    })

    return book
}

export const retrieveInfo = async (
    client: ContentfulClientApi,
    infoId: string
) => {
    const {
        items: [info]
    }: ContentfulCollection<IInfo> = await client.getEntries({
        content_type: 'info',
        'sys.id': infoId,
        limit: 1
    })

    return info
}
