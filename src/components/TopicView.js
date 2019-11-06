import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { TOPIC_HTML_QUERY } from "../data/queries"

export default function TopicView(props) {
  const { data } = useQuery(TOPIC_HTML_QUERY, {
    variables: { id: props.id }
  })
  return <div dangerouslySetInnerHTML={{ __html: data.topic.html }} />
}
