let darkbtn = document.getElementById("dark-mode");
let ligthBtn = document.getElementById('ligth-mode');
let bodyCualities = document.getElementById("cualities");
let buttonsColor = document.getElementById("buttons-bg");
let buttonGeneralSubmit = document.getElementById('save-user-button');
const header = document.getElementById('header-bg-frnt-style');



let DarkMode = () => {
        bodyCualities.style.backgroundColor = "rgb(39 39 39)";
        darkbtn.style.display = 'none';
        ligthBtn.style.display = 'flex';
        bodyCualities.style.color = 'white';
        buttonGeneralSubmit.style.backgroundColor = 'black';
        header.style.backgroundColor= 'black';
}

darkbtn.addEventListener("click", DarkMode);


let LigthMode = () => {
    bodyCualities.style.backgroundColor = "White";
    darkbtn.style.display = 'flex';
    ligthBtn.style.display = 'none';
    bodyCualities.style.color = 'black';
    header.style.backgroundColor= 'rgb(39 39 39)';
    buttonGeneralSubmit.style.backgroundColor = 'rgb(39 39 39)';
}


ligthBtn.addEventListener("click", LigthMode);

    
