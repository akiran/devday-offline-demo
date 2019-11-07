import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { persistCache } from "apollo-cache-persist"

const httpLink = createHttpLink({ uri: "http://localhost:4000" })

const cache = new InMemoryCache()

export default async function getClient() {
  cache.writeData({
    data: {
      isOnline: true,
      visitedRoutes: []
    }
  })
  await persistCache({
    cache,
    storage: window.localStorage
  })
  const client = new ApolloClient({
    link: httpLink,
    cache,
    resolvers: {}
  })

  return client
}
