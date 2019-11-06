import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { TOPIC_QUERY } from "../data/queries"
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import Sidebar from "./Sidebar"
import TopicView from "./TopicView"
import TopicEdit from "./TopicEdit"

export default function Topic(props) {
  const { data } = useQuery(TOPIC_QUERY, {
    variables: { id: props.id }
  })
  const [activeTab, setActiveTab] = useState("view")
  return (
    <Row>
      <Col xs={3}>
        <Sidebar />
      </Col>
      <Col xs="auto">
        <div>
          <h1>{data.topic.name}</h1>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "view" })}
              onClick={() => {
                setActiveTab("view")
              }}
            >
              View
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "edit" })}
              onClick={() => {
                setActiveTab("edit")
              }}
            >
              Edit
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="view">
            <TopicView />
          </TabPane>
          <TabPane tabId="edit">
            <TopicEdit />
          </TabPane>
        </TabContent>
      </Col>
    </Row>
  )
}
