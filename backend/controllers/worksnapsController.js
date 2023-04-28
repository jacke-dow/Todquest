import WorksnapsTimeEntryModel from "../models/Workshop.js"
import mongoose from "mongoose"
export const WorkSnap = async (req, res) => {
  try {
    // Create a new Work-snaps TimeEntry
    const newWorksnapsTimeEntry = new WorksnapsTimeEntryModel({
      student: new mongoose.Types.ObjectId(req.body.studentId),
      timeEntries: req.body.timeEntries,
    })

    const savedWorksnapsTimeEntry = await newWorksnapsTimeEntry.save()

    res.status(201).json(savedWorksnapsTimeEntry)
  } catch (err) {
    // Handle errors
    res.status(400).json({ message: err.message })
  }
}
