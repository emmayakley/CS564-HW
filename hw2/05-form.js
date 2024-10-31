// Add your code here

const form = document.getElementById("userForm");
const modalContent = document.getElementById("modalContent");

const modal = new boostrap.Modal(document.querySelector(".modal"));

form.addEventListener("submit", handleEvent);

function handleEvent(e) {
  //don't let form submit standard way
  e.preventDefault();

  //get values for all form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const registration = document.getElementById("registration").value;

  const courses = [];
  if (document.getElementById("programmingLanguages").checked) {
    courses.push("Programming Languages");
  }
  if (document.getElementById("operatingSystems").checked) {
    courses.push("Operating Systems");
  }
  if (document.getElementById("fullStack").checked) {
    courses.push("Full Stack Web Development");
  }

  const comments = document.getElementById("comments").value;

  //modal implementation
  modalContent.innerHTML = `<p>Full Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Registration Status: ${registration}</p>
    <p>Courses Taken: ${courses.join(",")}</p>
    <p>Additional Comments: ${comments}</p>`;

  modal.show();
}
