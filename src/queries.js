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

export const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`

export const POST_QUERY = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      title
      description
    }
  }
`

export const POST_PAGE_QUERY = gql`
  query getPost($id: Int!) {
    posts {
      id
      title
    }
    post(id: $id) {
      id
      title
      description
    }
  }
`
