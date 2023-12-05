const week = [
    {day: "Monday",
    date: 1
    },
    {day: "Tuesday",
    date: 2
    },
    {day: "Wednesday",
    date: 3
    },
    {day: "Thursday",
    date: 4
    },
    {day: "Friday",
    date: 5
    },
    {day: "Saturday",
    date: 6
    },
]

const weeks =[[1,2], [3,4], [5,6 ]]

document.addEventListener('DOMContentLoaded', function(){
    let list  = document.querySelector('ul')
    let  btn = document.querySelector('button')

    btn.addEventListener('click', function(){
        for (let  i = 0;  i  < week.length ; i++){
                let  li = document.createElement('li')
                li.innerHTML =  `Day  ${week[i].date} = ${week[i].day}`
                list.append(li)
        }
    })

})