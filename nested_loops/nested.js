const staffsDetails = [
    { 
    name: "Sam Josh",
     age: 44,
     salary: 4000,
     currency: "USD",
     image: "/assets/man1.png"
    },

    { 
    
    name: "Justina Kap",
     age: 34,
     salary: 3000,
     currency: "USD" ,
     image: "/assets/woman1.png"
    },

    { 
    name: "Chris Colt",
     age: 37,
     salary: 3700,
     currency: "USD" ,
     image: "/assets/man2.png"
    },

    { 
    name: "Jane Doe",
     age: 24,
     salary: 4200,
     currency: "USD" ,
     image: "/assets/woman2.png"
    }

  ];

document.addEventListener('DOMContentLoaded', function(){
    let names =  document.querySelector('ul')

    staffsDetails.forEach(function(currentElement) {
         let li = document.createElement('li')
        li.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${currentElement.image}" class="card-img-top" alt="avatar">
        <div class="card-body">
          <h5 class="card-title">Name: ${currentElement.name}</h5>
          <h6>Age: ${currentElement.age} </h6>
          <p class="card-text">Salary: $ ${currentElement.salary}</p>
          <a href="#" class="btn btn-primary"> Call ${currentElement.name}</a>
        </div>
      </div>`
        names.append(li)
        
    })
})

