function page_load() {
    const msgText = "# page3: page load";

    console.log(msgText);
}

function btnSubmit() {
    let msgText = "# page 3: btnSubmit";
    console.log(msgText);

    const divdisplayinfo = document.getElementById("div-display-info");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const comments = document.getElementById("comments");

    if(divdisplayinfo == null) {
        let msgText = "divdisplayinfo not found";
        console.log(msgText);
        return false;
    }

    if(firstName == null) {
        let msgText = "firstName not found";
        console.log(msgText);       
        return false;
    }

    if(firstName.value.trim().length == 0) {
        let msgText = "Please enter a valid input";
        console.log(msgText);
        divdisplayinfo.innerText = "Please Enter Your First Name";
        return false;
    }

    if(lastName == null) {
        let msgText = "lastName not found";
        console.log(msgText);
        return false;
    }

    if(email == null) {
        let msgText = "email not found";
        console.log(msgText);
        return false;
    }

    if(email.value.trim().length == 0) {
        let msgText = "Please enter a valid input";
        console.log(msgText);
        divdisplayinfo.innerText = "Please Enter Your Email";
        return false;
    }

    if(comments == null) {
        let msgText = "comments not found";
        console.log(msgText);
        return false;
    }

    if(comments.value.trim().length == 0) {
        let msgText = "Please enter a valid input";
        console.log(msgText);
        divdisplayinfo.innerText = "Please Enter Your Comments";
        return false;
    }

    msgText = "form submitted firstName: " + firstName.value + ", lastName: " + lastName.value + ", email: " + email.value + ", comments: " + comments.value;
    console.log(msgText);

    msgText = "form submitted";
    divdisplayinfo.innerText = "form submitted";

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    comments.value = "";

    firstName.focus();

    //prevent form post
    return false;
}

function lnkClear() {
    let msgText = "# page 3: lnkClear";
    console.log(msgText);

   const firstName = document.getElementById("first-name");
   const lastName = document.getElementById("last-name");
   const email = document.getElementById("email");
   const comments = document.getElementById("comments");

   firstName.value = "";
   lastName.value = "";
   email.value = "";
   comments.value = "";
    
}



