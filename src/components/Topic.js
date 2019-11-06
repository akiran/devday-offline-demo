import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { TOPIC_QUERY } from "../data/queries"
import Sidebar from "./Sidebar"

export default function Topic(props) {
  const { loading, data } = useQuery(TOPIC_QUERY, {
    variables: { id: props.id }
  })
  return (
    <div>
      <Sidebar />
      <div>
        <h1>{data.topic.name}</h1>
        <div>{data.topic.markdown}</div>
      </div>
    </div>
  )
}
