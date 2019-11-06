import React from "react"
import logo from "./logo.svg"
import "./App.css"
import PostsPage from "./PostsPage"
import PostPage from "./PostPage"
import {
  BrowserRouter as Router,
  Prompt,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import { VISITED_ROUTES_QUERY, ONLINE_QUERY } from "./queries"
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
          <Route path="/post/:id" component={PostPage}></Route>
          <Route exact path="/" component={PostsPage}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
