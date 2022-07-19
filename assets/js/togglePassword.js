const togglePassword = document.querySelector("#togglePassword");
const formPassword = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  const type =
    formPassword.getAttribute("type") === "password"
      ? "text"
      : "password";
  formPassword.setAttribute("type", type);
});

let icon = togglePassword
  .querySelector("#iconTogglePassword")
  .getAttribute("class");

const changeIcon = (iconChange) => {
  $("span").click(() => {
    $("#iconTogglePassword").toggleClass(`fa-solid ${iconChange}`);
  });
  icon = `fa-solid ${iconChange} input-icon`;
};

if (icon == "fa-solid fa-eye input-icon") {
  changeIcon("fa-eye-slash");
}

if (icon == "fa-solid fa-eye-slash input-icon") {
  changeIcon("fa-eye");
}