let usersAdd = document.getElementById("users-saved-info");
let submituser = document.getElementById("subscription-form");

let datausers = [
    {
    Brand:"Ford",
    Model:"Ford Fiesta 2021",
    Color:"Red and black",
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
        const createColor = document.createElement("input");
        createnames.value = `${user.Brand}`;
        createColor.value = `${user.Model}`
        createEmail.value = `${user.Color}`;


        createItem.appendChild(createnames);
        createItem.appendChild(createColor);
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
        Brand: document.getElementById("Brand").value,
        Model: document.getElementById("Model").value,
        Color: document.getElementById("Color").value,
    }
    userlist.push(user);
    createusers();
}

let editUser = (user, index) => {

    document.getElementById("Brand").value = user.Brand;
    document.getElementById("Model").value = user.Model;
    document.getElementById("Color").value = user.Color;
   
    datausers.splice(index, 1);

}


let deleteUser = (index) => {

    datausers.splice(index, 1);
    createusers()

}


submituser.addEventListener("submit", newUser)