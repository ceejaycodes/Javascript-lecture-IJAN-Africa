document.addEventListener('DOMContentLoaded', function(){
    
    let subbtn = document.querySelector('button')
    
    subbtn.addEventListener('click', function(){
        let input = document.querySelector('input').value;
        alert(`Hello ${input}`)
    })

})