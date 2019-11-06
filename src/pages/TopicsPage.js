import React from "react"
import Topics from "../components/Topics"
import Page from "./Page"
import { TOPICS_QUERY } from "../data/queries"

export default function TopicsPage(props) {
  return (
    <Page query={TOPICS_QUERY}>
      <Topics />
    </Page>
  )
}
