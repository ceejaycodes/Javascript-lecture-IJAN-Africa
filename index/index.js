
let b = 0
function count() {
        b++
        document.querySelector('.lit').innerHTML = `Counter is Currently at ${b}`
        if(b % 10 === 0){
            alert(`counter is currently at ${b} `)
        }
    }

    document.addEventListener('DOMContentLoaded', function(){

        document.querySelector('button').onclick = count;

    })