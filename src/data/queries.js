import gql from "graphql-tag"

export const VISITED_ROUTES_QUERY = gql`
  query {
    visitedRoutes @client
  }
`

export const ONLINE_QUERY = gql`
  query {
    isOnline @client
  }
`

export const TOPICS_QUERY = gql`
  query {
    topics {
      id
      name
    }
  }
`

export const TOPIC_QUERY = gql`
  query getTopic($id: String!) {
    topic(id: $id) {
      id
      name
      html
      markdown
    }
  }
`

export const TOPIC_PAGE_QUERY = gql`
  query getTopicPage($id: String!) {
    topics {
      id
      name
    }
    topic(id: $id) {
      id
      name
      html
      markdown
    }
  }
`
