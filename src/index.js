import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ApolloProvider } from "@apollo/react-hooks"
import getClient from "./data/apolloClient"

async function renderApp() {
  const client = await getClient()
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root")
  )
}

renderApp()
