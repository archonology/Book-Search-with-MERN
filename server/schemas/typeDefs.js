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
    image: Image
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    savedBooks(savedBooks: [Book]):
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(input: Book): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
