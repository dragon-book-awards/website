// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IAwardFields {
    /** Name */
    name: string

    /** Winner */
    winner?: IBook | undefined
}

/** Represents an award for a given year. */

export interface IAward extends Entry<IAwardFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'award'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export interface IBookFields {
    /** Title */
    title: string

    /** Author */
    author: string

    /** Cover Image */
    coverImage: Asset

    /** Pin Image */
    pinImage?: Asset | undefined

    /** Pin URL */
    pinUrl?: string | undefined

    /** Content */
    content: Document
}

/** Represents the information related to a book. */

export interface IBook extends Entry<IBookFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'book'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export interface IBookCategoryFields {
    /** Name */
    name: string

    /** Content */
    content?: Document | undefined

    /** Books */
    books: IBook[]
}

/** Represents a collection of books. */

export interface IBookCategory extends Entry<IBookCategoryFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'bookCategory'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export interface ICompetitionFields {
    /** Name */
    name: string

    /** Book Categories */
    bookCategories: IBookCategory[]

    /** Info Categories */
    infoCategories: IInfoCategory[]

    /** Awards */
    awards?: IAward[] | undefined
}

/** Represents the information associated with a competition. */

export interface ICompetition extends Entry<ICompetitionFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'competition'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export interface IInfoFields {
    /** Title */
    title: string

    /** Content */
    content: Document
}

/** Represents an information page. */

export interface IInfo extends Entry<IInfoFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'info'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export interface IInfoCategoryFields {
    /** Name */
    name: string

    /** Content */
    content?: Document | undefined

    /** Info */
    info: IInfo[]
}

/** Represents a collection of info pages. */

export interface IInfoCategory extends Entry<IInfoCategoryFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'infoCategory'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export interface IWebsiteFields {
    /** Name */
    name: string

    /** Current Competition */
    currentCompetition: ICompetition

    /** Archived Compeitions */
    archivedCompeitions?: ICompetition[] | undefined

    /** Home Page Info */
    homePageInfo: IInfo

    /** Active */
    active: boolean
}

/**  Represents all exposed information. */

export interface IWebsite extends Entry<IWebsiteFields> {
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
        contentType: {
            sys: {
                id: 'website'
                linkType: 'ContentType'
                type: 'Link'
            }
        }
    }
}

export type CONTENT_TYPE =
    | 'award'
    | 'book'
    | 'bookCategory'
    | 'competition'
    | 'info'
    | 'infoCategory'
    | 'website'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
