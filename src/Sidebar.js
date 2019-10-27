import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import { POSTS_QUERY } from "./queries"

export default function Sidebar() {
  const {
    data: { posts }
  } = useQuery(POSTS_QUERY)
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}
