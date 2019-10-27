import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"

const httpLink = createHttpLink({ uri: "http://localhost:4000" })

const cache = new InMemoryCache()
const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers: {}
})

cache.writeData({
  data: { visitedRoutes: [] }
})

export default client
