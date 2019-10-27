import React, { useEffect } from "react"
import { useQuery, useApolloClient } from "@apollo/react-hooks"
import { VISITED_ROUTES_QUERY } from "./queries"
import { useLocation } from "react-router-dom"

export default function Page(props) {
  const client = useApolloClient()
  const location = useLocation()
  const { loading, error, data } = useQuery(props.query, {
    variables: props.variables
  })

  const {
    data: { visitedRoutes }
  } = useQuery(VISITED_ROUTES_QUERY)

  console.log(visitedRoutes, "vis")

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
  return <div>{props.children}</div>
}
