import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { POST_QUERY } from "./queries"

export default function Post(props) {
  const { loading, data } = useQuery(POST_QUERY, {
    variables: { id: props.id }
  })
  return (
    <div>
      <h1>{data.post.title}</h1>
      <div>{data.post.description}</div>
    </div>
  )
}
