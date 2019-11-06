import React from "react"
import Topic from "../components/Topic"
import Page from "./Page"
import { TOPIC_PAGE_QUERY } from "../data/queries"
import { useParams } from "react-router-dom"

export default function TopicPage(props) {
  const { id } = useParams()
  return (
    <Page query={TOPIC_PAGE_QUERY} variables={{ id }}>
      <Topic id={id} />
    </Page>
  )
}
