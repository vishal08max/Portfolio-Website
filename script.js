document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", function () {
    const details = this.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
      this.textContent = "View Project";
    } else {
      details.style.display = "block";
      this.textContent = "Hide Details";
    }
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully! 🔥");
});

  