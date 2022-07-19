const getFormInput = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const obj = {
    username,
    password,
  };
  return obj;
};

const getUser = (key) => {
  const user = localStorage.getItem(key);
  return dataToObject(user);
};

const dataToString = (data) => {
  return JSON.stringify(data);
};

const dataToObject = (data) => {
  return JSON.parse(data);
};

const addUser = (new_user) => {
  const new_user_parse = dataToString(new_user);
  if (!getUser(new_user.username)) {
    localStorage.setItem(new_user.username, new_user_parse);
    sendNotify("success", "Sign up successfully");
    setTimeout(() => {
      document.location.href = "../../sign_in/index.html";
    }, 3000);
  } else {
    sendNotify("info", "Username already taken");
  }
};

const login = (user) => {
  if (getUser(user.username) !== null && getUser(user.username).password === user.password) {
    sendNotify("success", "Sign in successfully")
    setTimeout(() => {
      document.location.href = "../../admin/dashboard.html";
    }, 3000);
  } else {
    sendNotify("warning", "Wrong username or password")
  }
};

const btnSignUp = () => {
  addUser(getFormInput());
};

const btnSignIn = () => {
  login(getFormInput());
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const sendNotify = (icon, title) => {
  Toast.fire({
    icon,
    title,
  });
};
