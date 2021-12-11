import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({
 uri: 'http://127.0.0.1:4000/graphql',
 credentials: 'same-origin',
})

const client = new ApolloClient({
 ssrMode: typeof window === 'undefined',
 link: httpLink,
 cache: new InMemoryCache(),
})

export default client
