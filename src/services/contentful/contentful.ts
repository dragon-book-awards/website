import { ContentfulClientApi, EntryCollection } from 'contentful'
import {
    ICompetitionFields,
    IWebsiteFields,
    IBookCategoryFields,
    IInfoCategoryFields,
    IBookFields,
    IInfoFields,
    IAwardFields
} from './types'
import fclone from 'fclone'

const retrieveCurrentWebsite = async (client: ContentfulClientApi) => {
    const {
        items: [website]
    }: EntryCollection<IWebsiteFields> = await client.getEntries({
        include: 10,
        content_type: 'website',
        'fields.active': true
    })

    return fclone(website)
}

const retrieveCurrentCompetition = async (client: ContentfulClientApi) => {
    const {
        fields: { currentCompetition }
    } = await retrieveCurrentWebsite(client)

    return fclone(currentCompetition)
}

const retrieveCompetitions = async (client: ContentfulClientApi) => {
    const {
        fields: { archivedCompeitions }
    } = await retrieveCurrentWebsite(client)

    return fclone(archivedCompeitions)
}

const retrieveCompetition = async (client: ContentfulClientApi, id: string) => {
    const {
        items: [competition]
    }: EntryCollection<ICompetitionFields> = await client.getEntries({
        include: 10,
        content_type: 'competition',
        'sys.id': id,
        limit: 1
    })

    return fclone(competition)
}

const retrieveBookCategory = async (
    client: ContentfulClientApi,
    id: string
) => {
    const {
        items: [bookCategory]
    }: EntryCollection<IBookCategoryFields> = await client.getEntries({
        include: 10,
        content_type: 'bookCategory',
        'sys.id': id,
        limit: 1
    })

    return fclone(bookCategory)
}

const retrieveInfoCategory = async (
    client: ContentfulClientApi,
    id: string
) => {
    const {
        items: [infoCategory]
    }: EntryCollection<IInfoCategoryFields> = await client.getEntries({
        include: 10,
        content_type: 'infoCategory',
        'sys.id': id,
        limit: 1
    })

    return fclone(infoCategory)
}

const retrieveBook = async (client: ContentfulClientApi, id: string) => {
    const {
        items: [book]
    }: EntryCollection<IBookFields> = await client.getEntries({
        include: 10,
        content_type: 'book',
        'sys.id': id,
        limit: 1
    })

    return fclone(book)
}

const retrieveBookAwards = async (client: ContentfulClientApi, id: string) => {
    const {
        items: awards
    }: EntryCollection<IAwardFields> = await client.getEntries({
        include: 10,
        content_type: 'award',
        'fields.winner.sys.id': id
    })

    return fclone(awards)
}

const retrieveAward = async (client: ContentfulClientApi, id: string) => {
    const {
        items: [award]
    }: EntryCollection<IAwardFields> = await client.getEntries({
        include: 10,
        content_type: 'award',
        'sys.id': id
    })

    return fclone(award)
}

const retrieveInfo = async (client: ContentfulClientApi, id: string) => {
    const {
        items: [info]
    }: EntryCollection<IInfoFields> = await client.getEntries({
        include: 10,
        content_type: 'info',
        'sys.id': id,
        limit: 1
    })

    return fclone(info)
}

export default {
    retrieveInfo,
    retrieveBook,
    retrieveInfoCategory,
    retrieveBookCategory,
    retrieveCompetition,
    retrieveCompetitions,
    retrieveCurrentWebsite,
    retrieveCurrentCompetition,
    retrieveBookAwards,
    retrieveAward
}
