function myfunction() {
  var validation = true;
  var FirstName = document.getElementById("FirstName").value;
  var Lastname = document.getElementById("LastName").value;
  var DOB = document.getElementById("DOB").value;
  var Email = document.getElementById("Email").value;
  var PhoneNumber = document.getElementById("Phone").value;
  var subject = document.getElementById("Sub").value;
  var Male = document.getElementById("M").checked;
  var Female = document.getElementById("F").checked;
  if (!FirstName) {
    validation = false;
    document.getElement;
    ById("errmsgFname").style.display = "block";
    document.getElementById("errmsgFname").innerHTML =
      "Please Enter first name";
    document.getElementById("errmsgFname").style.color = "red";
  }

  if (validation) {
    var parms = {
      FirstName: FirstName,
      LastName: Lastname,
      DOB: DOB,
      Email: Email,
      Gender: "Male",
      PhoneNumber: PhoneNumber,
    };

    const PostUrl = "http://127.0.0.1:5000/contact";
    axios
      .post(PostUrl, parms)
      .then((result) => {
        alert(result.msg);
      })
      .catch((err) => {});
  }
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function hideErrormsg(val) {
  document.getElementById(val).style.display = "none";
}
