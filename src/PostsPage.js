import React from "react"
import Posts from "./Posts"
import Page from "./Page"
import { POSTS_QUERY } from "./queries"

export default function PostPage(props) {
  return (
    <Page query={POSTS_QUERY}>
      <Posts />
    </Page>
  )
}
