const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function sendMail() {
  var params = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_uk4lhmy";
  const templateID = "template_bysz2df";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent succesfully");
    })
    .catch((err) => console.log(err));
}
