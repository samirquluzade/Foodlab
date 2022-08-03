import {
  businessOperations,
  kitchenOperations,
  modalOperations,
  propertyOperations,
  solutionsOperations,
} from "./modals/index";
import {successAlert,errorAlert} from "./alerts.js";
import {login, logout} from "./auth";
// import {login,logout,signup,deleteId} from "./auth/index";

const comment = document.getElementById("comments");
const comments = document.getElementsByClassName("comments");
const property = document.querySelector(".propertyForm");
const kitchenForm = document.querySelector(".kitchenForm");
const businessForm = document.querySelector(".businessForm");
const businessRestaurantForm = document.querySelector(".businessRestaurantForm");
const businessStoreForm = document.querySelector(".businessStoreForm");
const solutionsForm = document.querySelector(".solutionsForm");
const closeModal = document.getElementById("close");
const modal = document.getElementById("modalComment");
const contactDataForm = document.querySelector(".contact-data");
const loginForm = document.querySelector(".form-login-data");
const body = document.querySelector("body");
const navbar = document.querySelector("header");
const logo = document.querySelector(".logo");
const burger = document.querySelector("#burger");
const navlinks = document.querySelector(".links");
const form = document.querySelector('form');
const logoutAdmin = document.querySelector('.logout');
//
if(logoutAdmin){
  logoutAdmin.addEventListener("click",e => {
    e.preventDefault();
    const log = logout();
    if(log){
      successAlert("success","Hesabdan çıxıldı");
      window.setTimeout(() => {
        location.assign("/login");
      },1500);
    }
  });
}
// Modal close
closeModal.addEventListener("click", () => {
  body.classList.remove("popup");
  body.style.overflow = "auto";
  modal.classList.remove("active");
  modal.classList.remove("clicked");
});

// Submit contact modal
if(contactDataForm){
  contactDataForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('phone').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
     errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("restaurant_name",document.getElementById("restaurant").value);
      form.append("email",document.getElementById("email").value);
      form.append("phone_number",document.getElementById("phone").value);
      form.append("comments",document.getElementById("textarea").value);
      const forms = await modalOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("restaurant").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("textarea").value = "";
      }
    }
  });
}
if(loginForm){
  loginForm.addEventListener("submit",async(e) => {
    e.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = await login(email,password);
      if(data.data.status === "success"){
        successAlert("success","Uğurla daxil olundu");
        window.setTimeout(() => {
          location.assign("/dashboard");
        },1500);
      }
      else
      {
        errorAlert("error","İstifadəçi adı və ya şifrə səhvdir");
      }
  })
}
  // document.getElementById("btnLogin").addEventListener("click",e => {
  //   console.log('test');
  //   e.preventDefault();
  //   const email = document.getElementById("username").value;
  //   const password = document.getElementById("password").value;
  //   console.log(email);
  //   // const data = await login(email,password);
  //   // // console.log(data);
  //   // if(data.status === 200){
  //   //   successAlert("success","Uğurla daxil olundu");
  //   //   window.setTimeout(() => {
  //   //     location.assign("/");
  //   //   },1500);
  //   // }
  // });

if(property){
  property.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('email_addr').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('phoneNum').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
      errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("name",document.getElementById("name").value);
      form.append("email",document.getElementById("email_addr").value);
      form.append("phone_number",document.getElementById("phoneNum").value);
      form.append("property_address",document.getElementById("property_address").value);
      form.append("property_details",document.getElementById("property_details").value);
      form.append("metro_station",document.getElementById("metro_station").value);
      form.append("footage",document.getElementById("footage").value);
      const forms = await propertyOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("name").value = "";
        document.getElementById("email_addr").value = "";
        document.getElementById("phoneNum").value = "";
        document.getElementById("property_address").value = "";
        document.getElementById("property_details").value = "";
        document.getElementById("metro_station").value = "";
        document.getElementById("footage").value = "";
      }
    }
  });
}

if(kitchenForm){
  kitchenForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('kitchen_email').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('kitchen_phone').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
      errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("brand_name",document.getElementById("kitchen_name").value);
      form.append("address",document.getElementById("kitchen_address").value);
      form.append("phone_number",document.getElementById("kitchen_phone").value);
      form.append("email",document.getElementById("kitchen_email").value);
      form.append("kitchen_type",document.getElementById("kitchen_type").value);
      form.append("food",document.getElementById("kitchen_food").value);
      const forms = await kitchenOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("kitchen_name").value = "";
        document.getElementById("kitchen_address").value = "";
        document.getElementById("kitchen_phone").value = "";
        document.getElementById("kitchen_email").value = "";
        document.getElementById("kitchen_type").value = "";
        document.getElementById("kitchen_food").value = "";
      }
    }
  });
}

if(businessForm){
  businessForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('kitchen_email').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('kitchen_phone').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
      errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("brand_name",document.getElementById("kitchen_name").value);
      form.append("address",document.getElementById("kitchen_address").value);
      form.append("phone_number",document.getElementById("kitchen_phone").value);
      form.append("email",document.getElementById("kitchen_email").value);
      form.append("kitchen_type",document.getElementById("kitchen_type").value);
      form.append("food",document.getElementById("kitchen_food").value);
      const forms = await kitchenOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("kitchen_name").value = "";
        document.getElementById("kitchen_address").value = "";
        document.getElementById("kitchen_phone").value = "";
        document.getElementById("kitchen_email").value = "";
        document.getElementById("kitchen_type").value = "";
        document.getElementById("kitchen_food").value = "";
      }
    }
  });
}

if(businessRestaurantForm){
  businessRestaurantForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('business_email').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('phone_number').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
      errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("name",document.getElementById("name").value);
      form.append("brand_name",document.getElementById("brand_name").value);
      form.append("job_title",document.getElementById("job").value);
      form.append("phone_number",document.getElementById("phone_number").value);
      form.append("email",document.getElementById("business_email").value);
      form.append("property_details",document.getElementById("property_details").value);
      form.append("employee_count",document.getElementById("employeeNum").value);
      form.append("expansion_goal",document.getElementById("goal").value);
      form.append("type","restaurant");
      const forms = await businessOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("name").value = "";
        document.getElementById("brand_name").value = "";
        document.getElementById("job").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("business_email").value = "";
        document.getElementById("property_details").value = "";
        document.getElementById("employeeNum").value = "";
        document.getElementById("goal").value = "";
      }
    }
  });
}

if(businessStoreForm){
  businessStoreForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('business_email').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('phone_number').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
      errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("name",document.getElementById("name").value);
      form.append("brand_name",document.getElementById("brand_name").value);
      form.append("job_title",document.getElementById("job").value);
      form.append("phone_number",document.getElementById("phone_number").value);
      form.append("email",document.getElementById("business_email").value);
      form.append("property_details",document.getElementById("property_details").value);
      form.append("employee_count",document.getElementById("employeeNum").value);
      form.append("expansion_goal",document.getElementById("goal").value);
      form.append("type","store");
      const forms = await businessOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("name").value = "";
        document.getElementById("brand_name").value = "";
        document.getElementById("job").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("business_email").value = "";
        document.getElementById("property_details").value = "";
        document.getElementById("employeeNum").value = "";
        document.getElementById("goal").value = "";
      }
    }
  });
}

if(solutionsForm){
  solutionsForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById('solution_email').value;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneNumber = document.getElementById('phone_number').value;
    let regexpNumber = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!regexpEmail.test(email)){
      errorAlert("error","Invalid email address");
    }
    else if(!regexpNumber.test(phoneNumber)){
      errorAlert("error","Invalid phone number");
    }
    else {
      const form = new FormData();
      form.append("name",document.getElementById("name").value);
      form.append("brand_name",document.getElementById("brand_name").value);
      form.append("brand_number",document.getElementById("brand_number").value);
      form.append("phone_number",document.getElementById("phone_number").value);
      form.append("email",document.getElementById("solution_email").value);
      form.append("method",document.getElementById("method").value);
      form.append("pay_method",document.getElementById("pay_method").value);
      form.append("solutions_comment",document.getElementById("solutions_comment").value);
      const forms = await solutionsOperations(form);
      if(forms.status === 201){
        successAlert("success","Mesaj uğurla göndərildi");
        document.getElementById("name").value = "";
        document.getElementById("brand_name").value = "";
        document.getElementById("brand_number").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("solution_email").value = "";
        document.getElementById("method").value = "";
        document.getElementById("pay_method").value = "";
        document.getElementById("solutions_comment").value = "";
      }
    }
  });
}

// When click outside modal close modal
document.addEventListener("click", function (e) {
  if (modal.classList.contains("clicked")) {
    if (!e.target.closest(".modalComment")) {
      body.classList.remove("popup");
      body.style.overflow = "auto";
      modal.classList.remove("active");
      modal.classList.remove("clicked");
    }
  }
});

// Clicked home goes top
window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// Modal open
comment.addEventListener("click", () => {
  modal.classList.add("active");
  body.classList.add("popup");
  window.scrollTo({ top: 0, behavior: "smooth" });
  body.style.overflow = "hidden";
  setTimeout(() => {
    modal.classList.add("clicked");
  }, 1);
  if (navlinks.classList.contains("openBurger")) {
    navlinks.classList.remove("openBurger");
  }
});

comments.addEventListener("click", () => {
  modal.classList.add("active");
  body.classList.add("popup");
  window.scrollTo({ top: 0, behavior: "smooth" });
  body.style.overflow = "hidden";
  setTimeout(() => {
    modal.classList.add("clicked");
  }, 1);
  if (navlinks.classList.contains("openBurger")) {
    navlinks.classList.remove("openBurger");
  }
});

const openModal = () => {
  modal.classList.add("active");
  body.classList.add("popup");
  window.scrollTo({ top: 0, behavior: "smooth" });
  body.style.overflow = "hidden";
  setTimeout(() => {
    modal.classList.add("clicked");
  }, 1);
  if (navlinks.classList.contains("openBurger")) {
    navlinks.classList.remove("openBurger");
  }
}



// Burger menu
burger.addEventListener("click", () => {
  navlinks.classList.toggle("openBurger");
});

window.addEventListener("resize", () => {
  if (screen.width > 576) {
    navlinks.classList.remove("openBurger");
  }
});

const goTop = () => {
  window.scrollTo({top:0})
}

// for(let i = 0; i< deleteItem.length;i++){
//   deleteItem[i].addEventListener("click",async function(){
//     console.log('test');
//     const id = await deleteId(this.id,this.value);
//     if(id.status === 201){
//       successAlert("success","Silindi");
//     }
//   })
// }

// const deleteItem = async(id) => {
//   const deleted = deleteItemId(id);
//   if(deleted){
//     successAlert("success","Silindi!");
//   }
// }

//Validate email

form.addEventListener('submit', (e) => {
  e.preventDefault();
})