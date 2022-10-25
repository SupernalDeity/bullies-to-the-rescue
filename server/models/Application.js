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
      name: String,
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
    email: {
      type: String, 
      required: true,
    },
    phone: {
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
    coappoccupation: {
      type: String,
      required: true,
    },
    coappemployerinfo: {
      type: String,
      required: true,
    },
    ownbulldog: {
      type: Boolean,
      required: true,
    },
    medicalissues: {
      type: Boolean,
      required: true,
    },
    otherissues: {
      type: String,
      required: true,
    },
    dogbehavior: {
      type: Boolean,
      required: true,
    },
    dwellinginfo: {
      type: Boolean,
      required: true,
    },
    landlord: {
      name:{
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
      home:{
      type: Boolean,
        required: true,
      },
      car: {
        type: Boolean,
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
      type: Boolean,
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
      },
      age: {
        type: Boolean,
        required: true,
      },
      currentpets: {
        type: String,
        required: true,
      },
      medical: {
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
        office: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        number: {
          type: String,
          required: true,
        },
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
      commonissues: {
        type: String,
        required: true,
      },
      questionare: {
        heat: {
          type: Boolean,
          required: true,
        },
        food: {
          type: Boolean,
          required: true,
        },
        palate: {
          type: Boolean,
          required: true,
        },
        allergy: {
          type: Boolean,
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
        hearsay: {
          type: String,
          required: true,
        },
        previouspurchase: {
          type: String,
          required: true,
        },
        location: {
          type: Boolean,
          required: true,
        },
        appfee: {
          type: Boolean,
          required: true,
        },
        appvalid: {
          type: Boolean,
          required: true,
        },
        commitment: {
          type: Boolean,
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

const application = model('Application', appSchema);

module.exports = application;