let students = ['Jack', 'Sarah', 'Micheal', 'Jane']

document.addEventListener('DOMContentLoaded', function(){
    header =  document.querySelector('ul')

    students.forEach(function(student) {
        li = document.createElement('li')
        li.innerHTML = student
        header.append(li)
        
    })
})

