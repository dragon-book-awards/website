import { ContentfulClientApi, EntryCollection } from 'contentful'
import {
    ICompetitionFields,
    IWebsiteFields,
    IBookCategoryFields,
    IInfoCategoryFields,
    IBookFields,
    IInfoFields
} from './types'

const retrieveCurrentWebsite = async (client: ContentfulClientApi) => {
    const {
        items: [website]
    }: EntryCollection<IWebsiteFields> = await client.getEntries({
        include: 10,
        content_type: 'website',
        'fields.active': true
    })

    return website
}

const retrieveCurrentCompetition = async (client: ContentfulClientApi) => {
    const {
        fields: { currentCompetition }
    } = await retrieveCurrentWebsite(client)

    return currentCompetition
}

const retrieveCompetitions = async (client: ContentfulClientApi) => {
    const {
        items: competitions
    }: EntryCollection<ICompetitionFields> = await client.getEntries({
        include: 10,
        content_type: 'competition'
    })

    return competitions
}

const retrieveCompetition = async (
    client: ContentfulClientApi,
    competitionId: string
) => {
    const {
        items: [competition]
    }: EntryCollection<ICompetitionFields> = await client.getEntries({
        include: 10,
        content_type: 'competition',
        'sys.id': competitionId,
        limit: 1
    })

    return competition
}

const retrieveBookCategory = async (
    client: ContentfulClientApi,
    bookCategoryId: string
) => {
    const {
        items: [bookCategory]
    }: EntryCollection<IBookCategoryFields> = await client.getEntries({
        include: 10,
        content_type: 'bookCategory',
        'sys.id': bookCategoryId,
        limit: 1
    })

    return bookCategory
}

const retrieveInfoCategory = async (
    client: ContentfulClientApi,
    infoCategoryId: string
) => {
    const {
        items: [infoCategory]
    }: EntryCollection<IInfoCategoryFields> = await client.getEntries({
        include: 10,
        content_type: 'infoCategory',
        'sys.id': infoCategoryId,
        limit: 1
    })

    return infoCategory
}

const retrieveBook = async (client: ContentfulClientApi, bookId: string) => {
    const {
        items: [book]
    }: EntryCollection<IBookFields> = await client.getEntries({
        include: 10,
        content_type: 'book',
        'sys.id': bookId,
        limit: 1
    })

    return book
}

const retrieveInfo = async (client: ContentfulClientApi, infoId: string) => {
    const {
        items: [info]
    }: EntryCollection<IInfoFields> = await client.getEntries({
        include: 10,
        content_type: 'info',
        'sys.id': infoId,
        limit: 1
    })

    return info
}

export default {
    retrieveInfo,
    retrieveBook,
    retrieveInfoCategory,
    retrieveBookCategory,
    retrieveCompetition,
    retrieveCompetitions,
    retrieveCurrentWebsite,
    retrieveCurrentCompetition
}
