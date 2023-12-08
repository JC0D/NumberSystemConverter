let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");

let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
    eyeL.style.cssText = `
    left: 0.6em;
    top: 0.6em;
    `;
    eyeR.style.cssText = `
    right: 0.6em;
    top: 0.6em;
    `;
};

let normalHandStyle = () => {
    handL.style.cssText = `
    height: 2.81em;
    top: 7.4em;
    left: 7.5em;
    transform: rotate(0deg);
    `;
    handR.style.cssText = `
    height: 2.81em;
    top: 7.4em;
    right: 7.5em;
    transform: rotate(0deg); 
    `;
};
// When clicked the username input , the eyes will move lower
usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;
    `;
    eyeR.style.cssText = `
    right:0.75em;
    top: 1.12em;
    `;
    normalHandStyle();
});
// When clicked on password input , the hands will cover the eyes
passwordRef.addEventListener("focus", () => {
    handL.style.cssText = `
    height: 6.56em;
    top: 3.78em;
    left: 11.75em;
    transform: rotate(-155deg);
    `;
    handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
    `;
    normalEyeStyle();
});

// when clicked outside the user and pass input , eyes and hand will return
document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if(clickedElem != usernameRef && clickedElem != passwordRef) {
        normalEyeStyle();
        normalHandStyle();
    }
});

// create an account to login and to go to index.html
function login() {
    const validUser = "QRT2023";
    const validPass = "BSIT2A2023";

    const enteredUser = document.getElementById("username").value;
    const enteredPass = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    if(enteredUser === validUser && enteredPass === validPass) {
        loginMessage.textContent = "Log in Successful";
        // Redirect to another HTML page after succesful login
        window.location.href = "numbersystem.html";
    }
    else {
        loginMessage.textContent = "Invalid username or Password. Please try again";
    }
}

// Add an event listener for the "Enter" key press
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        login();
    }
});