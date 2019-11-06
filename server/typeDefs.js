import { gql } from "apollo-server-express"

const typeDefs = gql`
  enum Role {
    ADMIN
    REVIEWER
    USER
    UNKNOWN
  }

  type User {
    id: Int!
    email: String
    firstName: String
    lastName: String
    fullName: String
    role: Role
  }

  type Topic {
    id: String!
    name: String!
    html: String
    markdown: String
  }

  type Query {
    ping: Boolean
    users: [User]
    user(id: Int!): User
    topics: [Topic]
    topic(id: String!): Topic
  }
`

export default typeDefs
