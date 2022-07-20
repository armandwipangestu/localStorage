const tbody = document.querySelector(".tbody")
const getAllUser = () => {
    return Object.keys(localStorage)
}

const createElement = (element) => {
    return document.createElement(element)
}

const createTextNode = (text) => {
    return document.createTextNode(text)
}

const createDataTable = (data, i) => {
    const createTr = createElement("tr")
    const createTh = createElement("td")
    const no = createTextNode(i)
    createTh.appendChild(no)

    const createTdUsername = createElement("td")
    const createTdPassword = createElement("td")
    const createTdButtonDelete = createElement("td")
    const createTdButtonEdit = createElement("td")
    const username = createTextNode(getUser(data).username)
    const password = createTextNode(getUser(data).password)
    createTdUsername.appendChild(username)
    createTdPassword.appendChild(password)
    
    createTr.appendChild(createTh)
    createTr.appendChild(createTdUsername)
    createTr.appendChild(createTdPassword)

    const buttonView = createElement("button")
    buttonView.setAttribute("type", "button")
    buttonView.setAttribute("class", "btn btn-primary ms-2 me-2")
    const iconView = createElement("i")
    iconView.setAttribute("class", "fa-solid fa-eye")

    buttonView.appendChild(iconView)
    createTdButtonDelete.appendChild(buttonView)
    createTr.appendChild(createTdButtonDelete)

    const buttonEdit = createElement("button")
    buttonEdit.setAttribute("type", "button")
    buttonEdit.setAttribute("class", "btn btn-success me-2")
    const iconEdit = createElement("i")
    iconEdit.setAttribute("class", "fa-solid fa-edit")

    buttonEdit.appendChild(iconEdit)
    createTdButtonDelete.appendChild(buttonEdit)
    createTr.appendChild(createTdButtonDelete)

    const buttonDelete = createElement("button")
    buttonDelete.setAttribute("type", "button")
    buttonDelete.setAttribute("data-id", getUser(data).username)
    buttonDelete.setAttribute("class", "btn btn-danger delete")
    const iconDelete = createElement("i")
    iconDelete.setAttribute("class", "fa-solid fa-trash-alt")

    buttonDelete.appendChild(iconDelete)
    createTdButtonDelete.appendChild(buttonDelete)
    createTr.appendChild(createTdButtonDelete)


    return createTr
}

const showAllUser = () => {
    let i = 1
    getAllUser().forEach(user => {
        tbody.appendChild(createDataTable(user, i))
        i = i + 1
    })
}

showAllUser()

// const getDataId = (value) => {
//     const element = document.querySelector(value)
//     return element.dataset.id
// }

const deleteUser = () => {
    const hapus = document.querySelectorAll(".delete")
    hapus.forEach(hps => {
        hps.addEventListener("click", () => {
            localStorage.removeItem(hps.dataset.id)
            if ( ! localStorage.getItem(hps.dataset.id)) {
                alert("ok")
                location.reload()
            } else {
                alert("failed")
            }
        })
    })
}
deleteUser()