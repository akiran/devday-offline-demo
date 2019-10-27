import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./apolloClient"
import PostsPage from "./PostsPage"
import PostPage from "./PostPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/post/:id" component={PostPage}></Route>
            <Route exact path="/" component={PostsPage}></Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
