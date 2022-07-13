const btnSignUp = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let new_user = {
    username: username,
    password: password,
  };
  // checkUser(new_user);
  addUser(new_user);
  //sendNotify("success");
  sendNotify("failed");
};

// const checkUser = (new_user) => {
//   // if (new_user.username === getUser(new_user.username)) {
//   //   sendNotify("failed");
//   // } else {
//   //   addUser(new_user);
//   //   sendNotify("success");
//   // }
//   if (!getUser(new_user)) {
//     addUser(new_user);
//     sendNotify("success");
//   } else {
//     sendNotify("failed");
//   }
// };

// const getUser = (key) => {
//   // let user = localStorage.getItem(key);
//   // let userParse = JSON.parse(user);
//   // return userParse.username;
//   let exist_user = localStorage.getItem(key);
//   let exist_user_parse = JSON.parse(exist_user);
//   console.log(exist_user);
//   console.log(exist_user_parse);
//   if (key !== exist_user_parse.username) {
//     return true;
//   } else {
//     return false;
//   }
// };

const addUser = (data) => {
  let dataNewUser = JSON.stringify(data);
  localStorage.setItem(data.username, dataNewUser);
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
