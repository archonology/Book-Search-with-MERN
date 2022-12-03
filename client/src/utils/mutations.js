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
  mutation saveBook($bookId: ID!, $authors: String!, $description: String!, $title: String!, $link: String!, $image: String!) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, link: $link, image: $image) {
      token
      savedBook {
        authors
        bookId
        description
        image
        link
        title
      }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
removeBook(bookId: $bookId){
  bookId
}
}
`;
