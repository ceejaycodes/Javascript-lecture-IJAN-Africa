document.addEventListener('DOMContentLoaded', function(){
    const inputTag = document.querySelector('#myinput')
    const inputDiv = document.querySelector('#inputdiv')
    const btn = document.querySelector('#mybt')

    // btn.disabled = true
    inputDiv.style.backgroundColor = 'red';
    alert('Welcome To My Page')

   btn.addEventListener('click', function (){
    alert(`Hello ${inputTag.value}`)
    inputTag.value = "World"


   })





})