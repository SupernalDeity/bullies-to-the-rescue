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
    address2: String
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
    dogbehavior: String
    dwellinginfo: String
    landlord: Landlord
    fencedyard: String
    stairs: String 
    water: String 
    airconditioning: Airconditioning
    wheredog: Wheredog
    allergy: String
    family: Family
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
    questionare: Questionaire
  }

  input _Application {
    _id: ID
    name: String 
    age: Int
    coapplicant: String
    coapplicantage: Int
    address: String 
    address2: String
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
    dogbehavior: String
    dwellinginfo: String
    landlord: _Landlord
    fencedyard: String
    stairs: String 
    water: String 
    airconditioning: _Airconditioning
    wheredog: _Wheredog
    allergy: String
    family: _Family
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
    home: String
    car: String
  }

  input _Airconditioning {
    home: String
    car: String
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
    childreninfo: String
    childrensupervise: String
  }

  input _Family {
    willingness: String
    why: String
    children: String 
    childreninfo: String
    childrensupervise: String
  }

  type Questionaire {
    heat: String
    food: String
    palate: String
    allergy: String
    spayneuter: String 
    proccessing: Boolean
    hearabout: String 
    previouspurchase: String 
    travel: String 
    appfee: String
    appvalid: String
    commitment: String
    donate: Boolean
    accuracy: Boolean
    comments: String 
    date: String 
  }

  input _Questionaire {
    heat: String
    food: String
    palate: String
    allergy: String
    spayneuter: String 
    proccessing: Boolean
    hearabout: String 
    previouspurchase: String 
    travel: String 
    appfee: String
    appvalid: String
    commitment: String
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
