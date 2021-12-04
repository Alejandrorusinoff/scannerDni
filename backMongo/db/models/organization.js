const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const OrganizationSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EmployeeData',
  },
  companyName: {
    type: String,
    required: true,
  }, 
  companyHeadquartes: {
    type: String,
    required: true,
  }, 
  province: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  diretion: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+..+/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  employees: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'EmployeeData' 
    }
  ],
  date: { 
    type: String, 
    default: new Date().toLocaleDateString(), 
  },
  hour: {
    type: String,
    default: new Date().toLocaleTimeString()
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});


OrganizationSchema.pre("save", function (next) {
  const organization = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) return next(saltError);
      else {
        bcrypt.hash(organization.password, salt, function (hashError, hash) {
          if (hashError) return next(hashError);
          organization.password = hash;
          next();
        });
      }
    });
  } else return next();
});


const Organization = mongoose.model('Organization', OrganizationSchema);

module.exports = Organization
