import React from "react"
import Post from "./Post"
import Page from "./Page"
import { POST_PAGE_QUERY } from "./queries"
import { useParams } from "react-router-dom"

export default function PostPage(props) {
  const { id } = useParams()
  const postId = parseInt(id)
  return (
    <Page query={POST_PAGE_QUERY} variables={{ id: postId }}>
      <Post id={postId} />
    </Page>
  )
}
