import { FC } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import {
    documentToReactComponents,
    Options
} from '@contentful/rich-text-react-renderer'
import { Heading, Paragraph } from 'components'

interface Props {
    documentNode: Document
}
const RichText: FC<Props> = ({ documentNode }) => {
    const options: Options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => (
                <Heading level={1}>{children[0]}</Heading>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
                <Heading level={2}>{children[0]}</Heading>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
                <Heading level={3}>{children[0]}</Heading>
            ),
            [BLOCKS.HEADING_4]: (node, children) => (
                <Heading level={4}>{children[0]}</Heading>
            ),
            [BLOCKS.HEADING_5]: (node, children) => (
                <Heading level={5}>{children[0]}</Heading>
            ),
            [BLOCKS.HEADING_6]: (node, children) => (
                <Heading level={6}>{children[0]}</Heading>
            ),
            [BLOCKS.PARAGRAPH]: (nod, children) => {
                return <Paragraph>{children}</Paragraph>
            }
        }
    }

    return <div>{documentToReactComponents(documentNode, options)}</div>
}

export default RichText
