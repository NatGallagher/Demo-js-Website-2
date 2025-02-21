//javascript single line comment

/*
Multi line
comment
*/

function display_info1() {
    console.log("# page1 - display info");
}

function page_load() {
    console.log("# page load");
}

function demo_link1() {
    console.log("# page1 - link1");
    alert("# page1 - link1");
}

function demo_button1() {
    console.log("# page1 - button1");
    alert("# page1 - button1");
}

function demo_variables1() {
    console.log("# page1 - variables1");
    //alert("# page1 - variables1");

    //variable - in memory data, to us later in your code
    //data type - type of data stored in memory - string, number, boolean(true/false), other
    //global variables - accessed by another function
    //global or page level variables - defined outside a function, access by any function
    //function variables - access only by current function

    var1 = "intro to javascript"; //data-type - string
    var_2 = "6"; 
    var2 = 6 //data-type - number integer
    var3 = 6.0 //data-type - number floating point including decimal point
    var4 = true //or false, data-type - boolean(true/false)
    //other data types - object, boolean(true/false)
    //can convert string to number
    //when function ends - memory variable is removed from memory
    //use the variable
    console.log(var1);
    console.log(var1 + var_2);
    console.log(var1,var2,var3);

    //update variabl
    var3 = 6.3 //data type = float, can update to any other data type
}

function demo_variables2() {
    console.log("# page1 - variables2");
    //alert("# page1 - variables2");
    console.log("# page1 - variables1");
    //alert("# page1 - variables1");

    //variable - in memory data, to us later in your code
    //data type - type of data stored in memory - string, number, boolean(true/false), other
    //global variables - accessed by another function
    //global or page level variables - defined outside a function, access by any function
    //function variables - access only by current function

    //var - javascript es1-4 - 1997-2008
    //not including var keyword is same as var
    var var1 = "intro to javascript"; //data-type - string
    var var_2 = "6"; 
    var var2 = 6 //data-type - number integer
    var var3 = 6.0 //data-type - number floating point including decimal point
    var var4 = true //or false, data-type - boolean(true/false)
    //other data types - object, boolean(true/false)
    //can convert string to number
    //when function ends - memory variable is removed from memory
    //use the variable
    console.log(var1);
    console.log(var1 + var_2);
    console.log(var1,var2,var3);

    //update variabl
    var3 = 6.3 //data type = float, can update to any other data type
}

function demo_variables3() {
    console.log("# page1 - variables3");
    //alert("# page1 - variables3");
    console.log("# page1 - variables1");
    //alert("# page1 - variables1");

    //variable - in memory data, to us later in your code
    //data type - type of data stored in memory - string, number, boolean(true/false), other
    //global variables - accessed by another function
    //global or page level variables - defined outside a function, access by any function
    //function variables - access only by current function

    let var1 = "intro to javascript"; //data-type - string
    let var_2 = "6"; 
    let var2 = 6 //data-type - number integer
    let var3 = 6.0 //data-type - number floating point including decimal point
    let var4 = true //or false, data-type - boolean(true/false)
    //other data types - object, boolean(true/false)
    //can convert string to number
    //when function ends - memory variable is removed from memory
    //use the variable
    console.log(var1);
    console.log(var1 + var_2);
    console.log(var1,var2,var3);

    //update variabl
    var3 = 6.3 //data type = float, can update to any other data type
}

function demo_variables4() {
    console.log("# page1 - variables4");
    //alert("# page1 - variables4");
    console.log("# page1 - variables1");
    //alert("# page1 - variables1");

    //variable - in memory data, to us later in your code
    //data type - type of data stored in memory - string, number, boolean(true/false), other
    //global variables - accessed by another function
    //global or page level variables - defined outside a function, access by any function
    //function variables - access only by current function

    const var1 = "intro to javascript"; //data-type - string
    const var_2 = "6"; 
    const var2 = 6 //data-type - number integer
    const var3 = 6.0 //data-type - number floating point including decimal point
    const var4 = true //or false, data-type - boolean(true/false)
    //other data types - object, boolean(true/false)
    //can convert string to number
    //when function ends - memory variable is removed from memory
    //use the variable
    console.log(var1);
    console.log(var1 + var_2);
    console.log(var1,var2,var3);

    //update variabl
    var3 = 6.3 //data type = float, can update to any other data type
}

function demo_variables_numbers() {

    //const - read-only, fixed
    const _function_name = "# page1: demo_variables_numbers";

    //var -es4
    var num1 = 5; //integer (nondecimal)

    //let - e5+
    let num2 = 15.1; //floating point number including decimal

    let num3 = "20.1";

    let num4 = 25;
    //convert string to float
    const string_num4 = num4.toString();

    //defining and assigning values in 1 statement
    //convert string to integar 
    const total = (num1 + num2 + parseFloat(num3)); //without parseFloat it will throw an error or give us something we don't want

    console.log(_function_name.toUpperCase());

    //concatination
    console.log("total: " + total);
    console.log("total: ", total);
    console.log("total fixed decimal point: ", total.toFixed(2));

}

function demo_variables_strings() {
    const _function_name = "page1: demo_variables_strings";

    let str1 = "intro to js"
    const str2 = "  javascript  "
    const _version = "es6+"

    console.log(_function_name.toUpperCase());
    console.log("length: ", _function_name.length);
    console.log(str1);
    console.log(str2);
    console.log(str2.trim());
}

