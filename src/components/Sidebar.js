import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import { TOPICS_QUERY } from "../data/queries"
import { ListGroup, ListGroupItem } from "reactstrap"

export default function Sidebar() {
  const {
    data: { topics }
  } = useQuery(TOPICS_QUERY)
  return (
    <ListGroup>
      {topics.map(topic => (
        <ListGroupItem key={topic.id}>
          <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
