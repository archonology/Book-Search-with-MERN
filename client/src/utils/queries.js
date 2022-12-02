import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($email: String!) {
    user(email: $email) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        desciption
        title
        image
        link
      }
    }
  }
`;

