import { FC } from 'react'
import {
    Document,
    BLOCKS,
    INLINES,
    Inline,
    Block
} from '@contentful/rich-text-types'
import {
    documentToReactComponents,
    Options
} from '@contentful/rich-text-react-renderer'
import {
    IInfo,
    IAward,
    IBook,
    IBookCategory,
    IInfoCategory,
    ICompetition
} from 'services/contentful/types'
import {
    InfoLink,
    AwardLink,
    BookLink,
    BookCategoryLink,
    InfoCategoryLink,
    CompetitionLink,
    BookPreview,
    Image,
    AwardPreview,
    InfoPreview
} from 'components'

interface Props {
    documentNode: Document
}

const RichText: FC<Props> = ({ documentNode }) => {
    const options: Options = {
        renderNode: {
            [INLINES.EMBEDDED_ENTRY]: (node: Inline) => {
                const contentTypeId = node.data.target.sys.contentType.sys.id

                if (contentTypeId === 'info') {
                    const {
                        sys: { id },
                        fields: { title }
                    }: IInfo = node.data.target
                    return <InfoLink title={title} id={id} />
                } else if (contentTypeId === 'award') {
                    const {
                        sys: { id },
                        fields: { name }
                    }: IAward = node.data.target
                    return <AwardLink title={name} id={id} />
                } else if (contentTypeId === 'book') {
                    const {
                        sys: { id },
                        fields: { title }
                    }: IBook = node.data.target
                    return <BookLink title={title} id={id} />
                } else if (contentTypeId === 'bookCategory') {
                    const {
                        sys: { id },
                        fields: { name }
                    }: IBookCategory = node.data.target
                    return <BookCategoryLink title={name} id={id} />
                } else if (contentTypeId === 'infoCategory') {
                    const {
                        sys: { id },
                        fields: { name }
                    }: IInfoCategory = node.data.target
                    return <InfoCategoryLink title={name} id={id} />
                } else if (contentTypeId === 'competition') {
                    const {
                        sys: { id },
                        fields: { name }
                    }: ICompetition = node.data.target
                    return <CompetitionLink title={name} id={id} />
                } else {
                    return <p>Not found</p>
                }
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node: Block) => {
                const contentTypeId = node.data.target.sys.contentType.sys.id

                if (contentTypeId === 'book') {
                    const {
                        sys: { id },
                        fields: {
                            coverImage: {
                                fields: {
                                    file: { url },
                                    description
                                }
                            }
                        }
                    }: IBook = node.data.target

                    return (
                        <BookPreview
                            coverImage={<Image src={url} alt={description} />}
                            id={id}
                        />
                    )
                } else if (contentTypeId === 'award') {
                    const {
                        sys: { id },
                        fields: { name, winner }
                    }: IAward = node.data.target

                    return (
                        <AwardPreview
                            name={name}
                            id={id}
                            coverImage={
                                winner && (
                                    <Image
                                        src={
                                            winner.fields.coverImage.fields.file
                                                .url
                                        }
                                        alt={
                                            winner.fields.coverImage.fields
                                                .description
                                        }
                                    />
                                )
                            }
                        />
                    )
                } else if (contentTypeId === 'info') {
                    const {
                        sys: { id },
                        fields: { title }
                    }: IInfo = node.data.target

                    return <InfoPreview title={title} id={id} />
                }

                return <p>Temp</p>
            }
        }
    }

    return <div>{documentToReactComponents(documentNode, options)}</div>
}

export default RichText
