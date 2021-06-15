let usersAdd = document.getElementById("users-saved-info");
let submituser = document.getElementById("subscription-form");

let datausers = [
    {
    name:"YourName",
    lastname:"YourLastname",
    email:"YourEmail@dominio.es"
    },
]


let createusers = () => {

    usersAdd.innerHTML = "";
    userlist = datausers;

    userlist.forEach( (user,index) => {

        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "style-div");
        usersAdd.appendChild(createDiv)

        const createItem = document.createElement("div");
        createItem.setAttribute("class", "Item-table");
        createDiv.appendChild(createItem);

        const createnames = document.createElement("input");
        const createEmail = document.createElement("input");
        createnames.value = `${user.name} ${user.lastname}`;
        createEmail.value = `${user.email}`;


        createItem.appendChild(createnames);
        createItem.appendChild(createEmail);

        const operButtons = document.createElement("div");
        operButtons.setAttribute("class", "oper-buttons");
        createDiv.appendChild(operButtons);

        const editButton = document.createElement("button");
        editButton.setAttribute("class", "button-edit");
        editButton.addEventListener("click", () => editUser(user, index))
        editButton.setAttribute("Id", "edit");
        editButton.innerText = `Edit`;
        operButtons.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "button-delete");
        deleteButton.setAttribute("Id", "delete");
        deleteButton.addEventListener("click", () => deleteUser(index))
        deleteButton.innerText = `Delete`;
        operButtons.appendChild(deleteButton);
    });

}
createusers(datausers);

let newUser = event => {

    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
    }
    userlist.push(user);
    createusers();
}

let editUser = (user, index) => {

    document.getElementById("name").value = user.name;
    document.getElementById("lastname").value = user.lastname;
    document.getElementById("email").value = user.email;
   
    datausers.splice(index, 1);
    createusers()

}


let deleteUser = (index) => {

    datausers.splice(index, 1);
    createusers()

}


submituser.addEventListener("submit", newUser)