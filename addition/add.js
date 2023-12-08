const scores = [70, 55, 20, 50]

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