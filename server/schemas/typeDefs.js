const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    admin: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Application {
    _id: ID
    name: String 
    age: String
    coapplicant: String
    coapplicantage: String
    address: String 
    addresstwo: String
    email: String 
    phone: String
    phonetype: String 
    housemembers: String 
    occupation: String 
    employerinfo: String 
    employerphone: String
    coappoccupation: String 
    coappemployerinfo: String
    ownbulldog: String
    medicalissues: String
    otherissues: String 
    dwellinginfo: String
    landlordname: String
    landlordnumber: String
    fencedyard: String
    stairs: String 
    water: String 
    airconditioninghome: String
    airconditioningcar: String
    whereday: String 
    wherenight: String
    allergy: String
    familywillingness: String
    familywhy: String
    familychildren: String 
    familychildreninfo: String
    familychildrensupervise: String
    dogage: String
    currentpets: String
    medicalneeds: String
    adoptwhen: String
    surrenderpet: String
    adoptedanimal: String
    animalfriends: String
    bite: String 
    heartworm: String 
    vetcare: String 
    vetinfo: String
    references: String 
    behavior: String 
    correction: String 
    crates: String 
    trainingissues: String 
    commonhealthissues: String 
    questionnaireheat: String
    questionnairefood: String
    questionnairepalate: String
    questionnaireallergy: String
    questionnairespayneuter: String 
    questionnaireproccessing: String
    questionnairehearabout: String 
    questionnairepreviouspurchase: String 
    questionnairetravel: String 
    questionnaireappfee: String
    questionnaireappvalid: String
    questionnairecommitment: String
    questionnairedonate: String
    questionnaireaccuracy: String
    questionnairecomments: String 
    questionnairedate: String 
  }

  input ApplicationInput {
    _id: ID
    name: String 
    age: String
    coapplicant: String
    coapplicantage: String
    address: String 
    addresstwo: String
    email: String 
    phone: String
    phonetype: String 
    housemembers: String 
    occupation: String 
    employerinfo: String 
    employerphone: String
    coappoccupation: String 
    coappemployerinfo: String
    ownbulldog: String
    medicalissues: String
    otherissues: String 
    dwellinginfo: String
    landlordname: String
    landlordnumber: String
    fencedyard: String
    stairs: String 
    water: String 
    airconditioninghome: String
    airconditioningcar: String
    whereday: String 
    wherenight: String
    allergy: String
    familywillingness: String
    familywhy: String
    familychildren: String 
    familychildreninfo: String
    familychildrensupervise: String
    dogage: String
    currentpets: String
    medicalneeds: String
    adoptwhen: String
    surrenderpet: String
    adoptedanimal: String
    animalfriends: String
    bite: String 
    heartworm: String 
    vetcare: String 
    vetinfo: String
    references: String 
    behavior: String 
    correction: String 
    crates: String 
    trainingissues: String 
    commonhealthissues: String 
    questionnaireheat: String
    questionnairefood: String
    questionnairepalate: String
    questionnaireallergy: String
    questionnairespayneuter: String 
    questionnaireproccessing: String
    questionnairehearabout: String 
    questionnairepreviouspurchase: String 
    questionnairetravel: String 
    questionnaireappfee: String
    questionnaireappvalid: String
    questionnairecommitment: String
    questionnairedonate: String
    questionnaireaccuracy: String
    questionnairecomments: String 
    questionnairedate: String 
  }  

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    applications: [Application]
    application(id: ID!): Application
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!, admin:Boolean): Auth
    login(email:String!, password:String!): Auth
    applicationSubmit(input:ApplicationInput!): Application
  }
`;

module.exports = typeDefs;
