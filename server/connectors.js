import db from "./db"

export function getUsers() {
  return db.get("users")
}
export function getTopics() {
  return db.get("topics")
}
export function getTopic(id) {
  const topics = getTopics()
  return topics.find(topic => topic.id === id)
}
export function getUser(id) {
  const users = getUsers()
  return users.find(user => user.id === id)
}

export function updateTopic({ id, markdown }) {
  const topics = getTopics()
  const newTopics = topics.map(topic =>
    topic.id === id ? { ...topic, markdown } : topic
  )
  db.set("topics", newTopics)
  return getTopic(id)
}
