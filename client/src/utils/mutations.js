import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!, $authors: String!, $description: String!, $title: String!, $image: String!) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBook {
          bookId 
          authors
          description
          title
          image
        }
      }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
removeBook(bookId: $bookId){
  user {
    _id
    username
    email
    bookCount
    savedBook {
      bookId
    }
  }
}
}
`;
