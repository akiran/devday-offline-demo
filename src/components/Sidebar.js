import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Link } from "react-router-dom"
import { TOPICS_QUERY } from "../data/queries"

export default function Sidebar() {
  const {
    data: { topics }
  } = useQuery(TOPICS_QUERY)
  return (
    <div>
      {topics.map(topic => (
        <div key={topic.id}>
          <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
        </div>
      ))}
    </div>
  )
}
