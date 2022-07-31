// const closeBtn = document.getElementById("closeBtn");
const modalForm = document.querySelector(".formInput");
const bodyForm = document.querySelector("body");

//When clicked outside close modal
if(modalForm){
  document.addEventListener("click", function (e) {
    if (modalForm.classList.contains("clicked")) {
      if (!e.target.closest(".formInput")) {
        bodyForm.classList.remove("popup");
        bodyForm.style.overflow = "auto";
        modalForm.classList.remove("active");
        modalForm.classList.remove("clicked");
      }
    }
  });
}
  // const openModalForm = () => {
  //   modalForm.classList.add("active");
  //   bodyForm.classList.add("popup");
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   bodyForm.style.overflow = "hidden";
  //   setTimeout(() => {
  //     modalForm.classList.add("clicked");
  //   }, 1);
  //   if (navlinks.classList.contains("openBurger")) {
  //     navlinks.classList.remove("openBurger");
  //   }
  // }
  
  // Modal close
  // closeBtn.addEventListener("click", () => {
  //   bodyForm.classList.remove("popup");
  //   bodyForm.style.overflow = "auto";
  //   modalForm.classList.remove("active");
  //   modalForm.classList.remove("clicked");
  // });