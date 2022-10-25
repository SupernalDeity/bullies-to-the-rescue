const { Schema, model } = rquire('mongoose');

const fosterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: Number,  // Is it a Number or String? ... if you set it up as 333-333-3333 does that make it a string?
      required: true
    },
    dog: {
      type: String,
      ref: "Dogs"
    }
  }
);

const Fosters = model('Fosters', fosterSchema);

module.exports = Fosters;