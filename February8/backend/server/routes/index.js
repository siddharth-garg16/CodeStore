const express = require('express');
const router = express.Router();

const { uploadMiddleware } = require('../utils')

const studentController = require('../controllers');

router.get('/health', async (req, res) => {
    return res.json({msg: "Server is up"})
});

router.post('/createStudent', uploadMiddleware.single('image'), studentController.createStudentDetails);
router.get('/getAllStudents', studentController.getStudentDetails);
router.get('/getStudentDetailsById/:id', studentController.getStudentDetailsById);
router.put('/updateStudentById/:id', uploadMiddleware.single('image'), studentController.updateStudentById);
router.post('/addStudentSubject/:id', studentController.addStudentSubjectById);
router.put('/updateSubjectById/:studentId/:subjectId', studentController.updateSubjectById);
router.delete('/deleteStudent/:id', studentController.deleteStudent)
router.delete('/deleteSubject/:studentId/:subjectId', studentController.deleteSubject)

module.exports = router;