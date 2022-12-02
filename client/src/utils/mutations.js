import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: ID!
    $authors: [String]!
    $description: String!
    $title: String!
    $link: String!
    $image: Image!
 ) {
  saveBook(
    $bookId: ID!
    $authors: [String]!
    $description: String!
    $title: String!
    $link: String!
    $image: Image!
 )
 {
  token
  user {
    _id
    username
  }
 }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $bookId: ID!
 ) {
  removeBook(
    $bookId: ID!
 )
 }
 token
 user {
   _id
   username
 }
`;

