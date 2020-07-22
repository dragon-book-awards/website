import { FC } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import {
    documentToReactComponents,
    Options
} from '@contentful/rich-text-react-renderer'

interface Props {
    documentNode: Document
}
const RichText: FC<Props> = ({ documentNode }) => {
    const options: Options = {
        renderNode: {}
    }

    return <div>{documentToReactComponents(documentNode, options)}</div>
}

export default RichText
