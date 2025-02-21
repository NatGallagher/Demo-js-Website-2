function page_load() {
    console.log("# page2: page_load")
}

function lnk_dom_demo_1() {
    //js DOM- select an element in the page that updates the element text
    //getElementById = select html element by id
    let msgText = "<b># Introduction to js DOM</b>";
    //document.getElementById("div-display-info").innerText = msgText;
    document.getElementById("div-display-info").innerHTML = msgText;
}

function lnk_dom_demo_2() {

    let msgText = "<b># Introduction to js DOM</b>";
    
    console.log(msgText);
    
    //# variable data type object HTMLElement object- has different structure than string, boolean, number
    //# learn more about different object types ie: w3schools or online references
    //# id: HTMLelement object
    //# Json object -- different structures
    const eleDivInfo = document.getElementById("div-display-info"); //data type = HTMLElement or null

    //# if statment - make a decision in code - true/false
    //# if evaluates two values, if true call true code else if false call false code
    //# if (logical expression) = if a == b or if a ?= b or if a > b etc...
    if(eleDivInfo == null){
        //true code
        //# div-display-info not found (null)
        console.log("# div-display-info not found");
    }
    else {
        //false code
        //# div-display-info found
    }

    eleDivInfo.innerText = msgText;

}

function lnk_dom_demo_3()
{
    let msgText = "# page2 : link_dom_demo_3"
    console.log(msgText)
    //# select search text element
    //# select div element
    const txtSearch = document.getElementById("txtsearch"); //HTMLElement object 
    const eleDivInfo = document.getElementById("div-display-info"); //HTMLElement object 
    //# check if text and div element is null
    if (txtSearch == null) {
        console.log("# txtsearch field not found")
        return false //cancel mouse click and exit function 
    }
    if (eleDivInfo == null) {
        console.log("# div-display-info not found")
        return false //cancel mouse click and exit function 
    }
    //continue code if no error
    //# display seach text info in div
    if (txtSearch.value.trim().length == 0) {
        msgText = "# please enter a text to search";

        console.log(msgText);
        eleDivInfo.innerText =msgText;
        return false;
    }

    //txtSearch.value = retrieve text entered in text field
    msgText = "txtsearch: " + txtSearch.value;

    //eleDivInfo.innerHTML = msgText;
    eleDivInfo.innerText = msgText;

    //clear text field
    txtSearch.value = "";
}

function btnSearch() {
    //good practice for making sure the button is working
    let msgText = "# page 2: btnSearch";
    console.log(msgText); 

    const txtSearch = document.getElementById("txtsearch");
    const divdisplayinfo = document.getElementById("div-display-info");

    if(txtSearch == null) {
        msgText = "# txtSearch field not found";
        console.log(msgText);
        return false; //exiting the function
    }
    
    if(divdisplayinfo == null) {
        msgText = "# divdisplayinfo field not found";
        console.log(msgText);
        return false; //exiting the function
    }

    //you can combine them
    //if(txtSearch == null & divdisplayinfo == null)

    //validate if text field is empty, if so exit function
    if(txtSearch.value.trim().length == 0) {
        msgText = "please enter a valid text"
        console.log(msgText);
        divdisplayinfo.innerText = msgText;
        return false; //stop onclick and exit function
    }

    //display search text in dispaly div
    msgText = " # searching for: " + txtSearch.value;
    //divdisplayinfo.innerHTML = "<br>" + msgText + "</b>"
    divdisplayinfo.innerText = msgText;

    //clear Text field
    txtSearch.value = "";// clear text field
    txtSearch.focus(); //move keyboard focus to text field
}

function lnkClear() {
    let msgText = "# page 2: lnkClear";
    console.log(msgText);

    //select text field using document.getElementById
    const txtSearch = document.getElementById("txtsearch");
    const divdisplayinfo = document.getElementById("div-display-info");

    //validate if text field and display div is not null, if so and exit function
    if(txtSearch == null) {
        msgText = "txtSearch is null";
        console.log(msgText);
        return false;
    }
    //clear text field & div display
    txtSearch.value = "";
    //divdisplayinfo.innerText = ""; //up to the business if you clear this or not. In our example we only cleared the txtsearch

    //set keyboard focus to the text field
    txtSearch.focus();
    
}

