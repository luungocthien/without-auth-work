


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  gender: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  membership_status: { type: String, required: true },
  address: { type: String, required: true },
  profile_picture: { type: String, required: false }
}, { timestamps: true, versionKey: false });



//add  virtual field id
userSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

