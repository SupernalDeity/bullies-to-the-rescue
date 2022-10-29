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
    age: Int
    coapplicant: String
    coapplicantage: Int
    address: String 
    email: String 
    phone: String 
    housemembers: String 
    occupation: String 
    employerinfo: String 
    coappoccupation: String 
    coappemployerinfo: String
    ownbulldog: Boolean
    medicalissues: Boolean
    otherissues: String 
    dogbehavior: Boolean
    dwellinginfo: Boolean
    landlord: Landlord
    fencedyard: String
    stairs: String 
    water: String 
    airconditioning: Airconditioning
    wheredog: Wheredog
    allergy: Boolean
    family: Family
    dogage: String
    currentpets: String
    medical: String
    adoptwhen: String
    surrenderpet: String
    adoptedanimal: String
    animalfriends: String
    bite: String 
    heartworm: String 
    vetcare: String 
    vetinfo: Vetinfo
    references: String 
    behavior: String 
    correction: String 
    crates: String 
    trainingissues: String 
    commonissues: String 
    questionare: Questionaire
  }

  input _Application {
    _id: ID
    name: String 
    age: Int
    coapplicant: String
    coapplicantage: Int
    address: String 
    email: String 
    phone: String 
    housemembers: String 
    occupation: String 
    employerinfo: String 
    coappoccupation: String 
    coappemployerinfo: String
    ownbulldog: Boolean
    medicalissues: Boolean
    otherissues: String 
    dogbehavior: Boolean
    dwellinginfo: Boolean
    landlord: _Landlord
    fencedyard: String
    stairs: String 
    water: String 
    airconditioning: _Airconditioning
    wheredog: _Wheredog
    allergy: Boolean
    family: _Family
    dogage: String
    currentpets: String
    medical: String
    adoptwhen: String
    surrenderpet: String
    adoptedanimal: String
    animalfriends: String
    bite: String 
    heartworm: String 
    vetcare: String 
    vetinfo: _Vetinfo
    references: String 
    behavior: String 
    correction: String 
    crates: String 
    trainingissues: String 
    commonissues: String 
    questionare: _Questionaire
  }  

  type Landlord {
    name: String
    number: String
  }

  input _Landlord {
    name: String
    number: String
  }

  type Airconditioning {
    home: Boolean
    car: Boolean
  }

  input _Airconditioning {
    home: Boolean
    car: Boolean
  }

  type Wheredog {
    day: String 
    night: String
  }

  input _Wheredog {
    day: String 
    night: String
  }

  type Family {
    willingness: String
    why: String
    children: String 
  }

  input _Family {
    willingness: String
    why: String
    children: String 
  }

  type Vetinfo {
    office: String
    name: String
    address: String 
    number: String 
  }

  input _Vetinfo {
    office: String
    name: String
    address: String 
    number: String 
  }

  type Questionaire {
    heat: Boolean
    food: Boolean
    palate: Boolean
    allergy: Boolean
    spayneuter: String 
    proccessing: Boolean
    hearsay: String 
    previouspurchase: String 
    location: Boolean 
    appfee: Boolean
    appvalid: Boolean
    commitment: Boolean
    donate: Boolean
    accuracy: Boolean
    comments: String 
    date: String 
  }

  input _Questionaire {
    heat: Boolean
    food: Boolean
    palate: Boolean
    allergy: Boolean
    spayneuter: String 
    proccessing: Boolean
    hearsay: String 
    previouspurchase: String 
    location: Boolean 
    appfee: Boolean
    appvalid: Boolean
    commitment: Boolean
    donate: Boolean
    accuracy: Boolean
    comments: String 
    date: String 
  }

  input ApplicationInput {
    application: _Application
  
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
