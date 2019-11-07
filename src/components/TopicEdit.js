import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { TOPIC_MARKDOWN_QUERY } from "../data/queries"
import { Form, FormGroup, Row } from "reactstrap"
import gql from "graphql-tag"
import showdown from "showdown"
const htmlConverter = new showdown.Converter()

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
  const [updateTopic] = useMutation(updateTopicMutation)

  return (
    <Form>
      <FormGroup>
        <Row>
          <textarea
            className="form-control"
            rows="20"
            value={data.topic.markdown}
            onChange={e =>
              updateTopic({
                variables: { id: props.id, markdown: e.target.value },
                optimisticResponse: {
                  __typename: "Mutation",
                  updateTopic: {
                    __typename: "Topic",
                    id: props.id,
                    markdown: e.target.value,
                    html: htmlConverter.makeHtml(e.target.value)
                  }
                }
              })
            }
            style={{ width: "600px" }}
          ></textarea>
        </Row>
      </FormGroup>
    </Form>
  )
}
