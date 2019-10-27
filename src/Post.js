import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const POST_QUERY = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      title
      description
    }
  }
`

export default function Post(props) {
  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { id: props.id }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div>
      <h1>{data.post.title}</h1>
      <div>{data.post.description}</div>
    </div>
  )
}
