const { Schema, model } = require('mongoose');

const appSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true
    },
    coapplicant: {
      type: String,
      required: true,
      trim: true
    },
    coapplicantage: {
      type: Number,
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
    dogbehaviorissues: {
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
    questionaireheat: {
      type: String,
      required: true,
    },
    questionairefood: {
      type: String,
      required: true,
    },
    questionairepalate: {
      type: String,
      required: true,
    },
    questionaireallergy: {
      type: String,
      required: true,
    },
    questionairespayneuter: {
      type: String,
      required: true,
    },
    questionaireproccessing: {
      type: Boolean,
      required: true,
    },
    questionairehearabout: {
      type: String,
      required: true,
    },
    questionairepreviouspurchase: {
      type: String,
      required: true,
    },
    questionairetravel: {
      type: String,
      required: true,
    },
    questionaireappfee: {
      type: String,
      required: true,
    },
    questionaireappvalid: {
      type: String,
      required: true,
    },
    questionairecommitment: {
      type: String,
      required: true,
    },
    questionairedonate: {
      type: Boolean,
      required: true,
    },
    questionaireaccuracy: {
      type: Boolean,
      required: true,
    },
    questionairecomments: {
      type: String,
      trim: true,
    },
    questionairedate: {
      type: String,
      required: true,
    }
  },
)

const Application = model('Application', appSchema);

module.exports = Application;