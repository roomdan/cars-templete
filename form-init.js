let viewRegister = document.getElementById("become-register");
let buttonSw = document.getElementById("sw-cntn");



let sowForm = () => {

    viewRegister.style.display = "flex";
    hiddenButton()
}


let hiddenButton = () => {

    buttonSw.style.display = "none";
    let hiddenButton = document.getElementById("content-view");
    let WelcomeMensage = document.createElement("p");
    WelcomeMensage.setAttribute("class", "welcome-ms-style");
    WelcomeMensage.innerText = "Welcome to BMW cars register";


    hiddenButton.appendChild(WelcomeMensage);
    
}

buttonSw.addEventListener("click", sowForm);

