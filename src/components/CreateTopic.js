import React, { useState } from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import uuid from "uuid"
import { Button, Input, Container } from "reactstrap"
import { TOPICS_QUERY } from "../data/queries"
import Header from "./Header"

const createTopicMutation = gql`
  mutation createTopicMutation($id: String!, $name: String!) {
    createTopic(id: $id, name: $name) {
      id
      name
    }
  }
`

export default function CreateTopic(props) {
  const [createTopic] = useMutation(createTopicMutation)
  const [name, setName] = useState("")
  return (
    <div>
      <Header />
      <Container>
        <Input
          placeholder="topic name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ margin: "20px 0" }}
        />
        <Button
          onClick={() => {
            const id = uuid.v4()
            createTopic({
              variables: { id, name },
              refetchQueries: [{ query: TOPICS_QUERY }]
            }).then(() => {
              props.history.push(`/topic/${id}`)
            })
          }}
        >
          Add new topic
        </Button>
      </Container>
    </div>
  )
}
