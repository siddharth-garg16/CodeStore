const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const studentFullName = document.getElementById("fullname");
const studentEmail = document.getElementById("email");
const studentCourse = document.getElementById("course");
const updateFormDisplay = document.getElementById("update-form-wrapper");

const showData = () => {
    let entityDisplay = document.getElementById("entity-display")
    entityDisplay.innerHTML = ``;
    db.collection("registrations").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            entityDisplay.innerHTML += `
                <br>
                <div id="data">
                    <div><p>${doc.data().fullName}</p></div>
                    <div><p>${doc.data().email}</p></div>
                    <div><p>${doc.data().course}</p></div>
                    <div>
                        <button onclick="updateData('${doc.id}', '${doc.data().fullName}', '${doc.data().email}', '${doc.data().course}');"><img src="./media/icons8-edit-48.png" alt="edit-button" height="25px" width="25px"></button>
                        <button onclick="deleteData('${doc.id}');"><img src="./media/icons8-trash-32.png" alt="delete-button" height="25px" width="25px"></button>
                    </div>
                </div><br><hr>`
        });
    });
    updateFormDisplay.style.display = "none";
    return false;
}

const getFormDataAndPost = (event) => {
    event.preventDefault();
    const fullName = studentFullName.value;
    const email = studentEmail.value;
    const course = studentCourse.value;

    const studentObject = {
        fullName : fullName,
        email : email,
        course : course
    }

    db.collection("registrations").add(studentObject)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    showData();
}

const deleteData = (id) => {
    console.log(id);
    db.collection("registrations").doc(id).delete().then(() => {
        showData();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

const updateData = (id, name, email, course) => {
    const reqID = id;
    updateFormDisplay.style.display = "block";

    const updateName = document.getElementById("update-fullname");
    const updateEmail = document.getElementById("update-email");
    const updateCourse = document.getElementById("update-course");

    updateName.value = name;
    updateEmail.value = email;
    updateCourse.value = course;

    const updateRequest = (event) => {
        event.preventDefault();
        const updatedName = updateName.value;
        const updatedEmail = updateEmail.value;
        const updatedCourse = updateCourse.value;
        
        // console.log(updatedName, updatedEmail, updatedCourse, reqID);
        return db.collection("registrations").doc(reqID).update({
            fullName: updatedName,
            email : updatedEmail,
            course : updatedCourse
        })
        .then(() => {
            console.log("Document successfully updated!");
            showData();
            
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }
    const updateForm = document.getElementById("update-form");
    updateForm.onsubmit = updateRequest;
}

const inputForm  = document.getElementById("input-form");
inputForm.onsubmit = getFormDataAndPost;

showData();

