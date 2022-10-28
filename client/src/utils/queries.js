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
      email
      phone
      housemembers
      occupation
      employerinfo
      coappoccupation
      coappemployerinfo
      ownbulldog
      medicalissues
      otherissues
      dogbehavior
      dwellinginfo
      landlord {
        name
        number
      }
      fencedyard
      stairs
      water
      airconditioning {
        home
        car
      }
      wheredog {
        day
        night
      }
      allergy
      family {
        willingness
        why
        children
      }
      dogage
      currentpets
      medical
      adoptwhen
      surrenderpet
      adoptedanimal
      animalfriends
      bite
      heartworm
      vetcare
      vetinfo {
        office
        name
        address
        number
      }
      references
      behavior
      correction
      crates
      trainingissues
      commonissues
      questionare {
        heat
        food
        palate
        allergy
        spayneuter
        proccessing
        hearsay
        previouspurchase
        location
        appfee
        appvalid
        commitment
        donate
        accuracy
        comments
        date
      }
    }
  }
`
