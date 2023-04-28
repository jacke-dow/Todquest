import mongoose from "mongoose";

// Student schema
const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: "",
    validate: [validatefirstName, "Please fill in your first name"],
  },
  lastName: {
    type: String,
    trim: true,
    default: "",
    validate: [validatelastName, "Please fill in your last name"],
  },
  displayName: {
    type: String,
    trim: true,
  },
  municipality: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

function validatefirstName(value) {
  if (!value) {
    throw new Error("Please fill in your first name");
  }
}

function validatelastName(value) {
  if (!value) {
    throw new Error("Please fill in your last name");
  }
}

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
