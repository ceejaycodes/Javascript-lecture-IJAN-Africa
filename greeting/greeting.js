

document.addEventListener('DOMContentLoaded', function(){

   
    const inputTag = document.querySelector('#myinput')
    const inputDiv = document.querySelector('#inputdiv')
    const btn = document.querySelector('#mybt')

    function clicked(){
        alert(`Hello ${inputTag.value}`)

       }

    // btn.disabled = true
    inputDiv.style.backgroundColor = 'red';
    alert('Welcome To My Page')

   btn.addEventListener('click', clicked)





})