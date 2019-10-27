import React from "react"
import Post from "./Post"
import Page from "./Page"
import { POST_QUERY } from "./queries"

export default function PostPage(props) {
  const {
    match: {
      params: { id }
    }
  } = props
  const postId = parseInt(id)
  return (
    <Page query={POST_QUERY} variables={{ id: postId }}>
      <Post id={postId} />
    </Page>
  )
}
