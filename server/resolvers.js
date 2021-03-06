import {
  getUsers,
  getUser,
  getTopics,
  getTopic,
  updateTopic,
  createTopic
} from "./connectors"
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
  },
  Mutation: {
    createTopic: (_, args) => createTopic(args),
    updateTopic: (_, args) => updateTopic(args)
  }
}

export default resolvers
