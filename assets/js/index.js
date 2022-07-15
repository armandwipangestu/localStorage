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
  //console.log(`${getUser(user.username).username} \n ${user}`);
  const { username, password } = getUser(user.username);

  // if (username === user.username) {
  //   if (password === user.password) {
  //     sendNotify("success", "Sign in successfully");
  //   } else {
  //     sendNotify("warning", "Wrong username or password");
  //   }
  // } else {
  //   sendNotify("warning", "Wrong username or password");
  // }

  if (
    username === user.username ||
    (username == null && password === user.password)
  ) {
    sendNotify("success", "Sign in successfully");
  } else {
    sendNotify("warning", "Wrong username or password");
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
