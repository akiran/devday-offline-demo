import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { TOPIC_MARKDOWN_QUERY } from "../data/queries"
import { Form, FormGroup, Row } from "reactstrap"
import gql from "graphql-tag"

const updateTopicMutation = gql`
  mutation updateTopicMutation($id: String!, $markdown: String) {
    updateTopic(id: $id, markdown: $markdown) {
      id
      html
      markdown
    }
  }
`

export default function TopicEdit(props) {
  const { data } = useQuery(TOPIC_MARKDOWN_QUERY, {
    variables: { id: props.id }
  })
  const [updateTopic, res] = useMutation(updateTopicMutation)

  return (
    <Form>
      <FormGroup>
        <Row>
          <textarea
            class="form-control"
            rows="20"
            value={data.topic.markdown}
            onChange={e =>
              updateTopic({
                variables: { id: props.id, markdown: e.target.value }
              })
            }
            style={{ width: "600px" }}
          ></textarea>
        </Row>
      </FormGroup>
    </Form>
  )
}
