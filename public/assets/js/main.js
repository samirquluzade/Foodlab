import {login,logout,signup} from "./auth";
const loginForm = document.querySelector(".user");

if(loginForm){
    loginForm.addEventListener("submit",e => {
        e.preventDefault();
        const email = document.getElementById("exampleInputEmail").value;
        const password = document.getElementById("exampleInputPassword").value;
        login(email,password);
    })
}
// if(loginForm){
//     loginForm.addEventListener("submit",e => {
//         e.preventDefault();
//         const email = document.getElementById("exampleInputEmail").value;
//         const password = document.getElementById("exampleInputPassword").value;
//         login(email,password);
//     })
// }


