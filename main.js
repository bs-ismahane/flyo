const form = document.querySelector("form");
const input = document.querySelector("form input[type='email']");
const errorMessage = document.createElement("span");
errorMessage.textContent = "Please enter a valid email address!";
errorMessage.style.background = "none";
errorMessage.style.color = "red";
errorMessage.style.marginTop = "10px";
errorMessage.style.display = "block";

form.addEventListener("submit", (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(input.value==""){
        event.preventDefault();
        errorMessage.textContent = "Please enter a email address!";
        if (!form.querySelector(".error-message")) {
            errorMessage.classList.add("error-message");
            form.appendChild(errorMessage);
        }
    }else{
        if (!emailPattern.test(input.value)) {
            event.preventDefault();
            errorMessage.textContent = "Please enter a valid email address!";
            if (!form.querySelector(".error-message")) {
                errorMessage.classList.add("error-message");
                form.appendChild(errorMessage);
            }
        } else {
            const existingError = form.querySelector(".error-message");
            if (existingError) {
                existingError.remove();
            }
        }
    }
});
