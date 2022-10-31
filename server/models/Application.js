const { Schema, model } = require('mongoose');

const appSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: String,
      required: true
    },
    coapplicant: {
      type: String,
      required: true,
      trim: true
    },
    coapplicantage: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    addresstwo: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    phonetype: {
      type: String,
      required: true,
    },
    housemembers: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    employerinfo: {
      type: String,
      required: true,
    },
    employerphone: {
      type: String,
      required: true,
    },
    coappoccupation: {
      type: String,
      required: true,
    },
    coappemployerinfo: {
      type: String,
      required: true,
    },
    ownbulldog: {
      type: String,
      required: true,
    },
    medicalissues: {
      type: String,
      required: true,
    },
    otherissues: {
      type: String,
      required: true,
    },
    dwellinginfo: {
      type: String,
      required: true,
    },
    landlordname: {
        type: String,
        required: true,
    },
    landlordnumber: {
      type: String,
      required: true,
    },
    fencedyard: {
      type: String,
      required: true,
    },
    stairs: {
      type: String,
      required: true,
    },
    water: {
      type: String,
      required: true,
    },
    airconditioninghome: {
        type: String,
        required: true,
      },
    airconditioningcar: {
      type: String,
      required: true,
    },
    whereday: {
      type: String,
      required: true,
    },
    wherenight: {
      type: String,
      required: true,
    },
    allergy: {
      type: String,
      required: true,
    },
    familywillingness: {
      type: String,
      required: true,
    },
    familywhy: {
      type: String,
      required: true,
    },
    familychildren: {
      type: String,
      required: true,
    },
    familychildreninfo: {
      type: String,
      required: true,
    },
    familychildrensupervise: {
      type: String,
      required: true,
    },
    dogage: {
      type: String,
      required: true,
    },
    currentpets: {
      type: String,
      required: true,
    },
    medicalneeds: {
      type: String,
      required: true,
    },
    adoptwhen: {
      type: String,
      required: true,
    },
    surrenderpet: {
      type: String,
      required: true,
    },
    adoptedanimal: {
      type: String,
      required: true,
    },
    animalfriends: {
      type: String,
      required: true,
    },
    bite: {
      type: String,
      required: true,
    },
    heartworm: {
      type: String,
      required: true,
    },
    vetcare: {
      type: String,
      required: true,
    },
    vetinfo: {
      type: String,
      required: true,
    },
    references: {
      type: String,
      required: true,
    },
    behavior: {
      type: String,
      required: true,
    },
    correction: {
      type: String,
      required: true,
    },
    crates: {
      type: String,
      required: true,
    },
    trainingissues: {
      type: String,
      required: true,
    },
    commonhealthissues: {
      type: String,
      required: true,
    },
    questionnaireheat: {
      type: String,
      required: true,
    },
    questionnairefood: {
      type: String,
      required: true,
    },
    questionnairepalate: {
      type: String,
      required: true,
    },
    questionnaireallergy: {
      type: String,
      required: true,
    },
    questionnairespayneuter: {
      type: String,
      required: true,
    },
    questionnaireproccessing: {
      type: String,
      required: true,
    },
    questionnairehearabout: {
      type: String,
      required: true,
    },
    questionnairepreviouspurchase: {
      type: String,
      required: true,
    },
    questionnairetravel: {
      type: String,
      required: true,
    },
    questionnaireappfee: {
      type: String,
      required: true,
    },
    questionnaireappvalid: {
      type: String,
      required: true,
    },
    questionnairecommitment: {
      type: String,
      required: true,
    },
    questionnairedonate: {
      type: String,
      required: true,
    },
    questionnaireaccuracy: {
      type: String,
      required: true,
    },
    questionnairecomments: {
      type: String,
      trim: true,
    },
    questionnairedate: {
      type: String,
      required: true,
    }
  },
)

const Application = model('Application', appSchema);

module.exports = Application;