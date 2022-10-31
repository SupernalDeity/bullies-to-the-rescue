import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const APPLICATIONS = gql`
  query applications {
    applications {
      _id
      name
    }
  }
`

export const APPLICATION = gql`
  query application($id: ID!) {
    application(id: $id) {
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
    questionaireheat
    questionairefood
    questionairepalate
    questionaireallergy
    questionairespayneuter
    questionaireproccessing
    questionairehearabout
    questionairepreviouspurchase
    questionairetravel
    questionaireappfee
    questionaireappvalid
    questionairecommitment
    questionairedonate
    questionaireaccuracy
    questionairecomments
    questionairedate
    }
  }
`
