const getFormInput = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const obj = {
    username: username,
    password: password,
  };
  return obj;
};

const getUser = (key) => {
  const user = localStorage.getItem(key);
  return user;
};

const dataToString = (data) => {
  return JSON.stringify(data);
};

const addUser = (new_user) => {
  const new_user_parse = dataToString(new_user);
  if (!getUser(new_user.username)) {
    localStorage.setItem(new_user.username, new_user_parse);
    sendNotify("success");
    document.location.href = "../../sign_in/index.html";
  } else {
    sendNotify("failed");
  }
};

const login = (user) => {
  console.log(`${getUser(user.username)} \n ${user}`);
  if (JSON.parse(getUser(user.username)) == user) {
    sendNotify("success");
  } else {
    sendNotify("failed");
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

const sendNotify = (status) => {
  if (status == "failed") {
    Toast.fire({
      icon: "error",
      title: `Username already taken`,
    });
  } else {
    Toast.fire({
      icon: "success",
      title: `Sign up successfully`,
    });
  }
};
