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
    const errorFirstName = document.getElementById("error-first-name");
    const errorEmail = document.getElementById("error-email");
    const errorComments = document.getElementById("error-comments");

    if(divdisplayinfo == null) {
        let msgText = "divdisplayinfo not found";
        console.log(msgText);
        return false;
    }

    if(errorFirstName == null) {
        let msgText = "errorFirstName not found";
        console.log(msgText);
        return false;
    }

    //hide error lables
    errorFirstName.style.display = "none";

    if(firstName == null) {
        let msgText = "firstName not found";
        console.log(msgText);       
        return false;
    }

    if(firstName.value.trim().length == 0) {
        let msgText = "Please enter a valid input";
        console.log(msgText);
        divdisplayinfo.innerText = "Please Enter Your First Name";

        //show error lable
        errorFirstName.style.display = "inline-block";

        //other:
        //add remove element class
        //firstName.style.????? -- forder/color/other

        //firstName.classList.remove(".error-first-name");
        //firstName.classList.add(".error-first-name");

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

    errorEmail.style.display = "none";


    if(email.value.trim().length == 0) {
        let msgText = "Please enter a valid input";
        console.log(msgText);
        divdisplayinfo.innerText = "Please Enter Your Email";
        errorEmail.style.display = "inline-block";

        return false;
    }

    if(comments == null) {
        let msgText = "comments not found";
        console.log(msgText);
        return false;
    }

    errorComments.style.display = "none";


    if(comments.value.trim().length == 0) {
        let msgText = "Please enter a valid input";
        console.log(msgText);
        divdisplayinfo.innerText = "Please Enter Your Comments";
        errorComments.style.display = "inline-block";

        return false;
    }

    msgText = `form submitted firstName: ${firstName.value}, lastName: ${lastName.value}, email: ${email.value}, comments: ${comments.value}`;
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

    const errorFirstName = document.getElementById("error-first-name");
    const errorEmail = document.getElementById("error-email");
    const errorComments = document.getElementById("error-comments");
    
    errorFirstName.style.display = "none";
    errorEmail.style.display = "none";
    errorComments.style.display = "none";

    const divdisplayinfo = document.getElementById("div-display-info");
    divdisplayinfo.innerText = "";

    firstName.focus();
}



