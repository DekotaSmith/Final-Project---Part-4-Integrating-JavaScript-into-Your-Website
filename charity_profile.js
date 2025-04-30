// Show the volunteer form when the button is clicked
document.getElementById("volunteerBtn").addEventListener("click", function () {
  const form = document.getElementById("volunteerForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

// Optional: enhance interactivity (e.g., hover to reveal more info)
const profileHeader = document.querySelector("h2");
const extraInfo = document.createElement("p");
extraInfo.textContent = "This charity has been active for over 10 years, helping thousands in the local community.";
extraInfo.style.display = "none";
extraInfo.style.fontStyle = "italic";

profileHeader.insertAdjacentElement("afterend", extraInfo);

profileHeader.addEventListener("mouseover", function () {
  extraInfo.style.display = "block";
});

profileHeader.addEventListener("mouseout", function () {
  extraInfo.style.display = "none";
});
