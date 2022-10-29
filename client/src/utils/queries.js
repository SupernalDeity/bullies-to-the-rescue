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
      dogbehaviorissues
      dwellinginfo
      landlordinfo {
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
        childreninfo
        childrensupervise
      }
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
      questionare {
        heat
        food
        palate
        allergy
        spayneuter
        proccessing
        hearabout
        previouspurchase
        travel
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
