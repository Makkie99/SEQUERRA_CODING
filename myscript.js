var rollV, nameV, genderV, addressV, birthdayV, zodiacV;

function readForm() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  birthdayV = document.getElementById("Birthday").value;
  zodiacV = document.getElementById("Zodiac").value;
}

function clearForm() {
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Birthday").value = "";
  document.getElementById("Zodiac").value = "";
  document.getElementById("output").innerHTML = "";
}

// INSERT
document.getElementById("insert").onclick = function () {
  readForm();

  if (!rollV) {
    alert("Please enter Roll Number");
    return;
  }

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      birthday: birthdayV,
      zodiac: zodiacV,
    })
    .then(() => {
      alert("Data Inserted Successfully");
      clearForm();
    })
    .catch((error) => {
      alert("Error inserting data: " + error.message);
    });
};

// READ
document.getElementById("read").onclick = function () {
  readForm();

  if (!rollV) {
    alert("Please enter Roll Number to read data");
    return;
  }

  firebase
    .database()
    .ref("student/" + rollV)
    .once("value")
    .then((snap) => {
      if (snap.exists()) {
        const data = snap.val();
        document.getElementById("roll").value = data.rollNo || "";
        document.getElementById("name").value = data.name || "";
        document.getElementById("gender").value = data.gender || "";
        document.getElementById("address").value = data.address || "";
        document.getElementById("Birthday").value = data.birthday || "";
        document.getElementById("Zodiac").value = data.zodiac || "";

        document.getElementById("output").innerHTML = `
          <strong>Data Retrieved:</strong><br>
          Roll No: ${data.rollNo}<br>
          Name: ${data.name}<br>
          Gender: ${data.gender}<br>
          Address: ${data.address}<br>
          Birthday: ${data.birthday}<br>
          Zodiac: ${data.zodiac}<br>
        `;
      } else {
        alert("No data found for Roll Number: " + rollV);
      }
    })
    .catch((error) => {
      alert("Error reading data: " + error.message);
    });
};

// UPDATE
document.getElementById("update").onclick = function () {
  readForm();

  if (!rollV) {
    alert("Please enter Roll Number to update data");
    return;
  }

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      name: nameV,
      gender: genderV,
      address: addressV,
      birthday: birthdayV,
      zodiac: zodiacV,
    })
    .then(() => {
      alert("Data Updated Successfully");
      clearForm();
    })
    .catch((error) => {
      alert("Error updating data: " + error.message);
    });
};

// DELETE
document.getElementById("delete").onclick = function () {
  readForm();

  if (!rollV) {
    alert("Please enter Roll Number to delete data");
    return;
  }

  if (confirm("Are you sure you want to delete this record?")) {
    firebase
      .database()
      .ref("student/" + rollV)
      .remove()
      .then(() => {
        alert("Data Deleted Successfully");
        clearForm();
      })
      .catch((error) => {
        alert("Error deleting data: " + error.message);
      });
  }
};
