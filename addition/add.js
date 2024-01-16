const scores = [70,88,12,6,65,34,900,400]

document.addEventListener('DOMContentLoaded', ()=> {
    let total = 0;
    let strscor = "";
    let scor = document.querySelector('#scores')
    let tot = document.querySelector('#total')
    


    scores.forEach(score => {
        total += score  
        strscor += score + ','
    })


    scor.innerHTML = `Your Scores are ${strscor}`
     tot.innerHTML = `Your Total Score Is ${total}`


    console.log(total)
   
    

})