import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./apolloClient"
import Posts from "./Posts"
import Post from "./Post"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/post/:id" component={Post}></Route>
            <Route exact path="/">
              <Posts />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
