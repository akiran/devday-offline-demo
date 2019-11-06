import { getUsers, getUser, getTopics, getTopic } from "./connectors"
import showdown from "showdown"
const htmlConverter = new showdown.Converter()

const resolvers = {
  User: {
    fullName: (user, args, ctx) => {
      return `${user.firstName} ${user.lastName}`
    }
  },
  Topic: {
    html: topic => {
      return htmlConverter.makeHtml(topic.markdown)
    }
  },
  Query: {
    ping: () => true,
    topics: () => getTopics(),
    topic: (_, args) => getTopic(args.id),
    users: (_, args, ctx) => {
      return getUsers()
    },
    user: (_, args) => getUser(args.id)
  }
  // Mutation: {
  // createPost: (_, args) => createPost(args),
  // publishPost: (_, args, ctx) => publishPost(args, ctx)
  // }
}

export default resolvers
