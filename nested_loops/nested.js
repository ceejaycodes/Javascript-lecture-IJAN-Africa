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
  let Unordered = document.querySelector('ul')
  staffsDetails.forEach(current => {
    let listElement = document.createElement('li')
    listElement.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${current.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
    Unordered.append(listElement)
    
  })
  
})
