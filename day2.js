// // const hello = () => {
// //     setTimeout(() => {
// //         console.log("Hello World");
// //     }, 2000);
// // }
// // console.log("THis is a asynchroous programmig");

// function add(a1, a2, callback){
//     console.log(a1+a2);
//     callback();
// }
// let q=10;
// let w=20;
// add(q,w, sayHi);
// add(q,w, hello);
// add(hello, sayHi);
// function sayHi(){
//     console.log("This is callback function");
// }
// function hello(){
//     console.log("Hello World");
// }
//create a function display(callback) that print "Welcome to ABES, then call callback which print learning "FSD in CSE21".
function display(callback){
    console.log("Welcome to ABES");
    callback();
}
function display2(callback){
    console.log("WELCOME TO ABESEC");
    callback();
}
function learning(){
    console.log("Learning FSD in CSE21");
}

display(learning);
display2(learning);