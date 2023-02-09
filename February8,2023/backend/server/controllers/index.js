const { studentDB } = require("../db");
const { buildResponse, buildObjectResponse } = require("../utils/common")

module.exports.createStudentDetails = async function(req, res){
    if(Object.keys(req.body).length <= 0){
        return buildResponse(res, "Invalid input", 500);
    }
    const studentData = req.body;
    const tableName = "student";
    const columns = '(name, image, className, age, rollNo, contactNo)';
    console.log(req.file);
    const image = req.file.filename 
    const values = `('${studentData.name}', '${image}', '${studentData.className}', 
        ${studentData.age}, ${studentData.rollNo}, ${studentData.contactNo})`;
    
    try{
        
        const db = studentDB.getstudentDBInstance();
        const response = await db.createTuple(tableName, columns, values)
        console.log(response.insertId, 'response data')
        return buildObjectResponse(res, { id: response.insertId, message: "Succesfull"})
    } catch(e){
        console.log("Error: " + e);
        return buildResponse(res, "Internal error", 500)
    } 
}

module.exports.getStudentDetails = async function(req, res){
    const tableName = 'student'
    try{
        const db = studentDB.getstudentDBInstance();
        const response = await db.getAllDocuments(tableName)
        if(response.length === 0){
            return buildObjectResponse(res, [])
        }
        return buildObjectResponse(res, response)
    } catch(e) {
        console.log('Error: ' + e)
        return buildResponse(res, "Internal error", 500)
    }
}

module.exports.getStudentDetailsById = async function(req, res){
    const studId = parseInt(req.params.id)
    const tableName = "student"
    try{
        const db = studentDB.getstudentDBInstance();
        const response = await db.getDocument(tableName,"id", studId);
        const responsev1 = await db.getDocument("subjects", "studentId", studId);
        console.log(response, 'student details')
        if(response.length === 0){
            return buildResponse(res, "No data found", 404)
        }
        return buildObjectResponse(res, { ...response[0], subjects: responsev1 })
    } catch(e){
        console.log('Error: ', e);
        return buildResponse(res, "Internal error", 500);
    }
}

module.exports.updateStudentById = async function(req, res){
    const tableName = "student"
    const studId = parseInt(req.params.id)
    if(Object.keys(req.body).length === 0){
        return buildResponse(res, "Invalid input", 500)
    }
    try{
        console.log(req.body, req.file)
        const db = studentDB.getstudentDBInstance();
        const student = await db.getDocument(tableName,"id", studId);
        console.log(student, "student details")
        let studentEntity = {
            ...req.body,
            "image":req.file? req.file.filename: student[0].image
        }
        await db.updateDocument(tableName, studentEntity, studId);
        return buildObjectResponse(res, { message: 'Successfully updated', image: studentEntity.image })
    } catch(e){
        console.log("Error: ", e)
        return buildResponse(res, 'Internal error', 500)
    }
}

module.exports.addStudentSubjectById = async function(req, res){
    const tableName = "subjectmarks"
    const studId = parseInt(req.params.id)
    if(Object.keys(req.body).length === 0){
        return buildResponse(res, "Invalid input", 500)
    }
    console.log(req.body)
    const columns = '(studentId, subject, obtainedmarks, totalmarks)';
    try{
        const values = `(${studId}, '${req.body.name}', ${req.body.marks}, ${req.body.total})`;
        const db = studentDB.getstudentDBInstance();
        const response = await db.createTuple(tableName, columns, values)
        return buildObjectResponse(res, { id: response.insertId, message: "Succesfull"})
    } catch(e){
        console.log("Error: ", e)
        return buildResponse(res, 'Internal error', 500)
    }
}

module.exports.deleteStudent = async function(req, res){
    let tableName = "student";
    let id = req.params['id'];
    try{
        const db = studentDB.getstudentDBInstance();
        await db.deleteDocument(tableName, id);
        return buildResponse(res, "Succesfully deleted", 200);
    } catch(err){
        console.log("Error" + err);
        return buildResponse(res, "Internal error", 500);
    }
}


module.exports.deleteSubject = async function(req, res){
    let tableName = "subjectmarks";
    let subjectId = parseInt(req.params['subjectId']);
    try{
        const db = studentDB.getstudentDBInstance();
        await db.deleteDocument(tableName, subjectId);
        return buildResponse(res, "Succesfully deleted", 200);
    } catch(err){
        console.log("Error" + err);
        return buildResponse(res, "Internal error", 500);
    }
}


module.exports.updateSubjectById = async function(req, res){
    let tableName = "subjectmarks";
    let subjectId = parseInt(req.params['subjectId']);
    if(Object.keys(req.body).length === 0){
        return buildResponse(res, "Invalid input", 500)
    }
    try{
        const db = studentDB.getstudentDBInstance();
        const response = await db.updateDocument(tableName, req.body, subjectId);
        console.log(response, req.body)
        return buildResponse(res, "Successfully updated", 200);
    } catch(err){
        console.log("Error" + err);
        return buildResponse(res, "Internal error", 500);
    }

}