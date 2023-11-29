document.addEventListener('DOMContentLoaded', function(){
    let dateh = document.querySelector('#datehead')
    let button = document.querySelector('button')

    button.addEventListener('click', function(){
        const date = new Date()
        dateh.innerHTML = date
    })
})