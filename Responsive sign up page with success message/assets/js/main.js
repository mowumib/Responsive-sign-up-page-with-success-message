/* CHANGE IMAGE BASED ON SCREEN SIZE */
function changeIMG(){
    const img = document.querySelector("#img");
    if(window.innerWidth >= 768 && window.innerWidth <= 1439){
        img.src = "assets/images/illustration-sign-up-mobile.svg";
        // img.src = "assets/images/illustration-sign-up-desktop.svg";
           return;
    }else{
        img.src = "assets/images/illustration-sign-up-desktop.svg";
        return
    }
    // img.src = "assets/images/illustration-sign-up-mobile.svg";
}
window.addEventListener("load", changeIMG);
window.addEventListener("resize", changeIMG);




/* VARIABLES */
const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const formbtn = document.querySelector("#form-button");
const modalBtn = document.querySelector("#SC-modal-btn");



/* FORM BUTTON ONCLICK ACTION */
formbtn.addEventListener("click", (e) => {
    e.preventDefault();
    verifyEmail(emailInput.value);
    
});

/* SUBMIT THE FORM WHICH DISPLAYS THE SUCCESS MODAL */
function submitForm(e){
    scModal(e);
}

/* RESET THE FORM */
function resetForm() {
    emailInput.value = '';
    form.reset();
    
    
};


/* VERIFY THE EMAIL IS A VALID MAIL */
function verifyEmail(e){
    if(e.trim() === ""){
        createAlert("Required field");
        resetForm();
        return;
    }
    else if(!isValidEmail(e)){
        createAlert("Please enter a valid email address");
        resetForm();
        return;
    }
    else{
        submitForm(e);
        resetForm();
        removeAlert();
    }
    modalBtn.addEventListener("click", scModal);
    resetForm();
    removeAlert();

}
/* VALIDATES THE EMIAL FORMAT  */
function isValidEmail(e) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(e);
}

/* ALERT */
function createAlert(alertMsg){
    const p = document.createElement("P");
    p.textContent = alertMsg; 
    p.classList.add("form-alert");
    form.children[0].insertBefore(p, form.children[0].children[0]); 
    emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
    emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)';
}


/* REMOVE ALERT */
function removeAlert(){
    const formAlert = document.querySelector(".form-alert");
    if(formAlert) {
        formAlert.remove();
        emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
        emailInput.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    }
}


/* DISPLAYS AND REMOVES THE SUCCESS MODAL */
function scModal(e){
    const textEmail = document.querySelector(".SC-modal-text span");
    textEmail.textContent = e;
    const modal = document.querySelector("#SC-modal");
    const cont = document.querySelector("#container");
    if(modal.style.display === '' || modal.style.display === 'none') {
        modal.style.display = 'flex';
        cont.style.display = 'none';
        return;
    } else{
        modal.style.display = 'none';
        if(window.innerWidth >= 768 && window.innerWidth <= 1439){
            cont.style.display = 'inline-block';
            return;
        }else{
            cont.style.display = 'flex';
            return;
        }
        return;
    }
    
    
}
















