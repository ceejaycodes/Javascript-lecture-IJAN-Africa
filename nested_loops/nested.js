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
     currency: "Pounds" ,
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
     currency: "Euros" ,
     image: "/assets/woman2.png"
    }

  ];

document.addEventListener('DOMContentLoaded', function(){
  let Unordered = document.querySelector('ul')
  let h1 = document.querySelector('h1')
  h1.innerHTML = "Staff Register"
  h1.setAttribute('id', 'head')

  staffsDetails.forEach(current => {
    let listElement = document.createElement('li')
    listElement.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${current.image}" class="card-img-top" alt="staff" id="imageid">
    <div class="card-body">
      <h5 class="card-title">${current.name}</h5>
      <p class="card-text">Age: ${current.age}</p>
      <p class="card-text">Salary: ${current.salary} ${current.currency}</p>
      <button class="btn btn-primary">Call ${current.name}</button>
    </div>
  </div>`
  // let btn = document.querySelector('button')
  //   btn.addEventListener('click', ()=> {
  //     alert(`Calling ${current.name}`)
  //   })
    Unordered.append(listElement)

  
    
  })
  
})
