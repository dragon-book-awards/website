import { FC } from 'react'
import { Document, BLOCKS, INLINES, Inline } from '@contentful/rich-text-types'
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
    CompetitionLink
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
            }
        }
    }

    return <div>{documentToReactComponents(documentNode, options)}</div>
}

export default RichText
