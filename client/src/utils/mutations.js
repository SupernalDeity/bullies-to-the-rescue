import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_APPLICATION = gql`
  mutation addApplication($input: ApplicationInput!) {
    applicationSubmit(input: $input) {
      _id
    name
    age
    coapplicant
    coapplicantage
    address
    addresstwo
    email
    phone
    phonetype
    housemembers
    occupation
    employerinfo
    employerphone
    coappoccupation
    coappemployerinfo
    ownbulldog
    medicalissues
    otherissues
    dwellinginfo
    landlordname
    landlordnumber
    fencedyard
    stairs
    water
    airconditioninghome
    airconditioningcar
    whereday
    wherenight
    allergy
    familywillingness
    familywhy
    familychildren
    familychildreninfo
    familychildrensupervise
    dogage
    currentpets
    medicalneeds
    adoptwhen
    surrenderpet
    adoptedanimal
    animalfriends
    bite
    heartworm
    vetcare
    vetinfo
    references
    behavior
    correction
    crates
    trainingissues
    commonhealthissues
    questionnaireheat
    questionnairefood
    questionnairepalate
    questionnaireallergy
    questionnairespayneuter
    questionnaireproccessing
    questionnairehearabout
    questionnairepreviouspurchase
    questionnairetravel
    questionnaireappfee
    questionnaireappvalid
    questionnairecommitment
    questionnairedonate
    questionnaireaccuracy
    questionnairecomments
    questionnairedate
  }
}
`;
