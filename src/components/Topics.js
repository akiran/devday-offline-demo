import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import { TOPICS_QUERY } from "../data/queries"
import { ListGroup, ListGroupItem, Container } from "reactstrap"

export default function Topics() {
  const { loading, error, data } = useQuery(TOPICS_QUERY)
  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error}</div>
  }
  return (
    <Container>
      <ListGroup>
        {data.topics.map(topic => (
          <ListGroupItem key={topic.id}>
            <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  )
}
