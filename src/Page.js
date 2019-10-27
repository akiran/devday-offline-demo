import React from "react"
import { useQuery } from "@apollo/react-hooks"

export default function Page(props) {
  const { loading, error, data } = useQuery(props.query, {
    variables: props.variables
  })
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error !!!</div>
  }
  return <div>{props.children}</div>
}
