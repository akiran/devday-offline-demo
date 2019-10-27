import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Post from "./Post"

const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`

const newPostMutation = gql`
  mutation {
    createPost(title: "New Post", author: 1) {
      id
      title
    }
  }
`

export default function Posts() {
  const { loading, error, data } = useQuery(POSTS_QUERY)
  const [addPost, res] = useMutation(newPostMutation)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div>
      {data.posts.map(post => (
        <div key={post.id}>{post.title}</div>
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
      <Post id={1} />
    </div>
  )
}
