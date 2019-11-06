import React from "react"
import TopicsPage from "./pages/TopicsPage"
import TopicPage from "./pages/TopicPage"
import {
  BrowserRouter as Router,
  Prompt,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { VISITED_ROUTES_QUERY, ONLINE_QUERY } from "./data/queries"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const {
    data: { visitedRoutes }
  } = useQuery(VISITED_ROUTES_QUERY)
  const {
    data: { isOnline }
  } = useQuery(ONLINE_QUERY)
  return (
    <Router
      getUserConfirmation={(message, callback) => {
        if (!message.startsWith("NO_OFFLINE_DATA")) {
          // this is the default behavior
          const allowTransition = window.confirm(message)
          callback(allowTransition)
        }
      }}
    >
      <Prompt
        message={location =>
          !isOnline && !visitedRoutes.includes(location.pathname)
            ? `NO_OFFLINE_DATA: Offline data is not available for ${location.pathname}`
            : true
        }
      />
      <div className="App">
        <Switch>
          <Route path="/topic/:id" component={TopicPage}></Route>
          <Route exact path="/" component={TopicsPage}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
