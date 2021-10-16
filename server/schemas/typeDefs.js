const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        book id: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID
        user: User
    }
    input bookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs; 