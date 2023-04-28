import mongoose from "mongoose";

const Schema = mongoose.Schema;

// WorksnapsTimeEntry Schema
const WorksnapsTimeEntry = new Schema({
  student: {
    type: Schema.ObjectId,
    ref: "Student",
  },
  timeEntries: {
    type: Object,
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

const WorksnapsTimeEntryModel = mongoose.model(
  "WorksnapsTimeEntry",
  WorksnapsTimeEntry
);
export default WorksnapsTimeEntryModel;
