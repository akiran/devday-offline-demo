import React, { useEffect } from "react"
import { useQuery, useApolloClient } from "@apollo/react-hooks"
import { VISITED_ROUTES_QUERY, ONLINE_QUERY } from "../data/queries"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"

export default function Page(props) {
  const client = useApolloClient()
  const location = useLocation()
  const { loading, error, data } = useQuery(props.query, {
    variables: props.variables
  })

  const {
    data: { visitedRoutes }
  } = useQuery(VISITED_ROUTES_QUERY)
  const {
    data: { isOnline }
  } = useQuery(ONLINE_QUERY)

  useEffect(() => {
    if (data && !visitedRoutes.includes(location.pathname)) {
      client.writeData({
        data: { visitedRoutes: visitedRoutes.concat(location.pathname) }
      })
    }
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error !!!</div>
  }
  if (!isOnline && !visitedRoutes.includes(location.pathname)) {
    return <div>Page is not cached to display in offline mode</div>
  }
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
