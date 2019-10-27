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
  const {
    match: {
      params: { id }
    }
  } = props
  const { data } = useQuery(POST_QUERY, {
    variables: { id: parseInt(id) }
  })
  return (
    <div>
      <h1>{data.post.title}</h1>
      <div>{data.post.description}</div>
    </div>
  )
}
