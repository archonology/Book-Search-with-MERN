const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  input Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    link: String
    image: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    savedBook(bookId: ID!): [Book]
    me: User
  }_id

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(input: Book): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
