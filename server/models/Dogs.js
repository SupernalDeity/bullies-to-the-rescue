const { Schema, model } = require('mongoose');

const dogSchema = new Schema(
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
    foster: {
      name: String,   
      required: true,
      ref: 'Foster'
    }
  }
)

const Dogs = model('Dogs', dogSchema);

module.exports = Dogs;