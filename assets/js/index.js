const username = document.getElementById('username').value
const password = document.getElementById('password').value
const btn_sign_up = document.getElementById('btn-sign-up')

btn_sign_up.preventDefault()
btn_sign_up.addEventListener('click', () => {
  console.log(`Username: ${username}, Password: ${password}`)
})

// const handleBtn = (btn) => {
//   btn.preventDefault()
//   console.log(username)
// }

// handleBtn(btn_sign_up)