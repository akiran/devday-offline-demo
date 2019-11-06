import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { TOPIC_MARKDOWN_QUERY } from "../data/queries"
import { Input, Form, FormGroup, Row, Col } from "reactstrap"

export default function TopicEdit(props) {
  const { data } = useQuery(TOPIC_MARKDOWN_QUERY, {
    variables: { id: props.id }
  })
  return (
    <Form>
      <FormGroup>
        <Row>
          <textarea
            class="form-control"
            rows="20"
            value={data.topic.markdown}
            style={{ width: "600px" }}
          ></textarea>
        </Row>
      </FormGroup>
    </Form>
  )
}
