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

    const createTh = createElement("th")
    const no = createTextNode(i)
    createTh.appendChild(no)

    const createTdUsername = createElement("td")
    const createTdPassword = createElement("td")
    const username = createTextNode(getUser(data).username)
    const password = createTextNode(getUser(data).password)
    createTdUsername.appendChild(username)
    createTdPassword.appendChild(password)
    
    createTr.appendChild(createTh)
    createTr.appendChild(createTdUsername)
    createTr.appendChild(createTdPassword)

    const buttonDelete = createElement("button")
    buttonDelete.classList.add("btn", "btn-danger", "d-flex", "justify-content-center")
    const buttonText = createTextNode("Delete")
    buttonDelete.appendChild(buttonText)
    createTr.appendChild(buttonDelete)
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
