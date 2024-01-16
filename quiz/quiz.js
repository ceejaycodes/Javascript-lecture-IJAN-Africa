 const data = [
    {
        question: "Who is the President Of The World Economic Forum ",
        options: ["Barack  Obama","Angela Markel", "Klauss Shwabb", "Justin Trudeau"],
        correct: "Klauss Shwabb"
    },
    {
        question: "Which among these have visited the moon",
        options: ["NIkola Tesla","Buzz Aldrin", "Albert Einstein"],
        correct: "Buzz Aldrin"
    },
]

document.addEventListener('DOMContentLoaded', function(){
    let questionIndex = 0;
    const questionDiv = document.querySelector('#questions')
    const optionsDiv = document.querySelector('#options')
    const button = document.querySelector('button')
    const current = data[questionIndex]
    questionDiv.innerHTML = current.question;





    optionsDiv.innerHTML = " "

    current.options.forEach((option)=>{
        const button  = document.createElement('button')
        button.innerHTML = option
        button.classList.add('btn', 'btn-warning')
        optionsDiv.appendChild(button)
    })



})
