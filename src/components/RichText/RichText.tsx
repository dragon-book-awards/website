import { FC } from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface Props {
    documentNode: Document
}
const RichText: FC<Props> = ({ documentNode }) => {
    const options = {}
    return <div>{documentToReactComponents(documentNode)}</div>
}

export default RichText
