// Selecionar um elemento 

// const addUserText = document.getElementById("add-user");
// const addUserText = document.querySelector("#add-user");
// const myForm = document.querySelector(".item");


// Selecionar vários elementos 

// const allItems = document.querySelectorAll(".item");
// const allItems = document.getElementsByClassName(".item");

// const items = document.querySelector(".items");
// const button = document.querySelector(".btn");

    //items.remove();

    //.firstElementChild.remove();
    //items.lastElementChild.remove();

    //items.children[1].textContent = "Item1";
    //items.lastElementChild.innerHTML = "<h1>Hello world</h1>"

    //button.style.background = "red";
    //button.style.color = "yellow"

// const submitButton = document.querySelector("#submit-button");
// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");

// const items = document.querySelector(".items");
// const body = document.querySelector("body");

// submitButton.addEventListener("click", function(event){
//     event.preventDefault();

// const nameValue = nameInput.value;
// const emailValue = emailInput.value; 

// if(nameValue === "" || emailValue === ""){
//     return alert("Plase fill out all the fields!");
// }

// myForm.style.background = "red";
// items.firstElementChild.textContent = nameValue;
// items.children[1].textContent = emailValue;

// body.style.background = "black";


// });

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" ||  emailValue === "") {
        errorMessage.textContent = "Plese fill out the fields!";
        errorMessage.classList = "error";
    }
});