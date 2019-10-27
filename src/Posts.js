import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { POSTS_QUERY } from "./queries"

const newPostMutation = gql`
  mutation {
    createPost(title: "New Post", author: 1) {
      id
      title
    }
  }
`

export default function Posts() {
  const { data } = useQuery(POSTS_QUERY)
  const [addPost, res] = useMutation(newPostMutation)
  return (
    <div>
      {data.posts.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
      ))}
      <button
        onClick={() =>
          addPost({
            refetchQueries: [{ query: POSTS_QUERY }]
          })
        }
      >
        Add new Post
      </button>
    </div>
  )
}
