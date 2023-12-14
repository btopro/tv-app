module.exports = {
  stories: ['../**/stories/*.stories.{js,md,mdx}'],
};
//#region    Language Menu Toggle

var lang_btn = document.querySelector(".language-specifier");
if(lang_btn){
    lang_btn.addEventListener("click", ()=> {
        document.querySelector(".language-menu").classList.toggle("show");
        document.querySelector("#lang-carret-icon").classList.toggle("bx-caret-up");
    })
}

//#endregion





//#region    Navbar Toggle

var menu_icon = document.querySelector(".left-nav i");
var close_icon = document.querySelector("#nav-close");
var navbar = document.querySelector(".navbar");

menu_icon.addEventListener("click", ()=>{

    navbar.style.left = "0";

})

close_icon.addEventListener("click", ()=>{

    navbar.style.left = "-100%";

})

//#endregion



// Calculate the bottom of the page
const bottomOfPage =
document.documentElement.scrollHeight - window.innerHeight;

const buttons = document.querySelectorAll(".buttons sl-button");
const nextButton = buttons[buttons.length - 1];
// Disable the button
nextButton.setAttribute("disabled", "true");

window.addEventListener("scroll", function () {

// Check if the user has scrolled to the bottom
if (window.scrollY >= bottomOfPage) {
// Enable the button
nextButton.removeAttribute("disabled");
} else {
// Disable the button
nextButton.setAttribute("disabled", "true");
}
});