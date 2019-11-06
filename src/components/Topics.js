import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { TOPICS_QUERY } from "../data/queries"
import { ListGroup, ListGroupItem } from 'reactstrap';

const newPostMutation = gql`
  mutation {
    createPost(title: "New Post", author: 1) {
      id
      title
    }
  }
`

export default function Topics() {
  const { data } = useQuery(TOPICS_QUERY)
  const [addPost, res] = useMutation(newPostMutation)
  return (
    <div>
      <ListGroup>
        {data.topics.map(topic => (
          <ListGroupItem key={topic.id}>
            <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
      <button
        onClick={() =>
          addPost({
            refetchQueries: [{ query: TOPICS_QUERY }]
          })
        }
      >
        Add new Post
      </button>
    </div>
  )
}
