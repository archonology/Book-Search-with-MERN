const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID
    authors: [String]!
    description: String
    title: String
    image: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(_id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: ID!, authors: [String]!, description: String!, title: String!, image: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
