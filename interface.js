let usersAdd = document.getElementById("users-saved-info");
let submituser = document.getElementById("subscription-form");

let datausers = [
    {
    Brand:"FORD",
    Model:"FORD FIESTA 2021",
    Color:"REN AND BLAK",
    },
]


let createbrand;
let createmodel;
let createcolor;


localStorage.setItem("dataAll", JSON.stringify(datausers));

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

        createbrand = document.createElement("input");
        createmodel = document.createElement("input");
        createcolor = document.createElement("input");
        createbrand.value = `${user.Brand}`;
        createmodel.value = `${user.Model}`
        createcolor.value = `${user.Color}`;


        createItem.appendChild(createbrand);
        createItem.appendChild(createmodel);
        createItem.appendChild(createcolor);

        const operButtons = document.createElement("div");
        operButtons.setAttribute("class", "oper-buttons");
        createDiv.appendChild(operButtons);

        const editButton = document.createElement("button");
        editButton.setAttribute("class", "button-edit");
        editButton.addEventListener("click", () => editUser(user, index))
        editButton.setAttribute("Id", "edit");
        editButton.innerText = `Save Changes`;
        operButtons.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "button-delete");
        deleteButton.setAttribute("Id", "delete");
        deleteButton.addEventListener("click", () => deleteUser(index))
        deleteButton.innerText = `Delete`;
        operButtons.appendChild(deleteButton);
    });

}

createusers()



let newUser = event => {

    event.preventDefault();

   if  (document.getElementById("Brand").value === "" 
    && document.getElementById("Model").value === ""
    && document.getElementById("Color").value === "")

{
    document.getElementById("save-user-button").style.backgroundColor = "red";
}

else {

    let user = {
        Brand: document.getElementById("Brand").value.toUpperCase(),
        Model: document.getElementById("Model").value.toUpperCase(),
        Color: document.getElementById("Color").value.toUpperCase(),
    }
    datausers.push(user);
    createusers();

    document.getElementById("save-user-button").style.backgroundColor = "rgb(86, 190, 86)";

}

}

let editUser = (user) => {

    user.Brand = createbrand.value.toUpperCase();
    user.Model = createmodel.value.toUpperCase();
    user.Color = createcolor.value.toUpperCase();
   
    createusers();

}

let deleteUser = (index) => {

    datausers.splice(index, 1);
    createusers()

}


submituser.addEventListener("submit", newUser)