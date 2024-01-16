document.addEventListener('DOMContentLoaded', ()=>{
    const menuTrigger = document.querySelector('#trigger')
    const mobileMenu = document.querySelector('.mobilemenu')

    mobileMenu.style.display = "none"

    menuTrigger.addEventListener('click', ()=>{
        if(menuTrigger.getAttribute("src") === "/assets/menuopen.png"){
            menuTrigger.setAttribute("src", "/assets/menuclose.png")
            mobileMenu.style.display = "block"

        } else if (menuTrigger.getAttribute("src") === "/assets/menuclose.png"){
            menuTrigger.setAttribute("src", "/assets/menuopen.png")
            mobileMenu.style.display = "none"

        }
    })
})