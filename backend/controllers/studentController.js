import StudentModel from "../models/student.js"
import WorksnapsTimeEntryModel from "../models/Workshop.js"

// Create student model
export const StudentController = async (req, res) => {
  try {
    const newStudent = new StudentModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      displayName: req.body.displayName,
      municipality: req.body.municipality,
    })

    // Save new student to the database
    const savedStudent = await newStudent.save()

    res.status(201).json(savedStudent)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

//loop thru each student and show it's time entries
export const LoopTimeController = async (req, res) => {
  try {
    const students = await StudentModel.find().exec()
    const timeEntriesByStudent = []

    for (const student of students) {
      const timeEntries = await WorksnapsTimeEntryModel.find({
        student: student._id,
      })

      const studentTimeEntries = {
        studentId: student._id,
        firstName: student.firstName,
        lastName: student.lastName,
        timeEntries: timeEntries,
      }
      timeEntriesByStudent.push(studentTimeEntries)
    }

    res.status(200).json(timeEntriesByStudent)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Internal server error" })
  }
}
