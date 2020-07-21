const contentfulManagement = require('contentful-management')
const dotenv = require('dotenv')

dotenv.config({ path: '.env.local' })

const getContentfulEnvironment = async () => {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
    })

    const space = await contentfulClient.getSpace(
        process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    )

    const environmentPromise = space.getEnvironment(
        process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT
    )

    return environmentPromise
}

module.exports = getContentfulEnvironment
