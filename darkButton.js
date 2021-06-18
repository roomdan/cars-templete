let darkbtn = document.getElementById("dark-mode");
let bodyCualities = document.getElementById("cualities");
let buttonsColor = document.getElementById("buttons-bg");


let DarkMode = () => {

bodyCualities.style.backgroundColor = "rgb(200, 200, 150)";
darkbtn.innerHTML = "";
darkbtn.innerText = "Normal"

}

darkbtn.addEventListener("click", DarkMode);

    
