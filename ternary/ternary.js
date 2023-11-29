document.addEventListener('DOMContentLoaded', () => {
    let first = document.querySelector('h1')
    let button = document.querySelector('button')

    button.addEventListener('click', function(){
     first.innerHTML === 'Shina' ? first.innerHTML = 'Marvel' : first.innerHTML = 'Shina'
    })
})




// if(first.innerHTML === 'Shina'){
//     first.innerHTML = 'Marvel'
// }else{
//     first.innerHTML = 'Shina'
// }