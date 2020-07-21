import { createClient } from 'contentful'

const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT
})

export default client
