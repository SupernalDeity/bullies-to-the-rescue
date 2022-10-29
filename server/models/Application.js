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
    address2: {
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
    landlordinfo: {
      name: {
        type: String
      },
      number: {
        type: String
      },
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
    airconditioning: {
      home: {
        type: String,
        required: true,
      },
      car: {
        type: String,
        required: true,
      },
    },
    wheredog: {
      day: {
        type: String,
        required: true,
      },
      night: {
        type: String,
        required: true,
      },
    },
    allergy: {
      type: String,
      required: true,
    },
    family: {
      willingness: {
        type: String,
        required: true,
      },
      why: {
        type: String,
        required: true,
      },
      children: {
        type: String,
        required: true,
      },
      childreninfo: {
        type: String,
        required: true,
      },
      childrensupervise: {
        type: String,
        required: true,
      },
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
    questionare: {
      heat: {
        type: String,
        required: true,
      },
      food: {
        type: String,
        required: true,
      },
      palate: {
        type: String,
        required: true,
      },
      allergy: {
        type: String,
        required: true,
      },
      spayneuter: {
        type: String,
        required: true,
      },
      proccessing: {
        type: Boolean,
        required: true,
      },
      hearabout: {
        type: String,
        required: true,
      },
      previouspurchase: {
        type: String,
        required: true,
      },
      travel: {
        type: String,
        required: true,
      },
      appfee: {
        type: String,
        required: true,
      },
      appvalid: {
        type: String,
        required: true,
      },
      commitment: {
        type: String,
        required: true,
      },
      donate: {
        type: Boolean,
        required: true,
      },
      accuracy: {
        type: Boolean,
        required: true,
      },
      comments: {
        type: String,
        trim: true,
      },
      date: {
        type: String,
        required: true,
      }
    },
  },
)

const Application = model('Application', appSchema);

module.exports = Application;