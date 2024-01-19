document.addEventListener('DOMContentLoaded', ()=>{
    const menuTrigger = document.querySelector('#trigger')
    const mobileMenu = document.querySelector('.mobilemenu')


    //mobile menu navigation
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


    // modal control
    const modal = document.querySelector('.modal')
    const main = document.querySelector('.main')
    const body = document.querySelector('body')
    const modalTrigger = document.querySelector('.modaltrigger')
    const closeModal = document.querySelector('.closemodal')
    modal.style.display ='none';



    //initiate default state
    main.addEventListener('click', ()=> {
    modal.style.display ='none';
    body.style.backgroundColor = 'white';


    })

    // close modal event listener
    closeModal.addEventListener('click', ()=> {
    modal.style.display ='none';
    body.style.backgroundColor = 'white';


    })

    //open modal
    modalTrigger.addEventListener('click', ()=>{
        modal.style.display = 'block'
        body.style.backgroundColor = '#bbbcbf'
    })

    //end modal control





})