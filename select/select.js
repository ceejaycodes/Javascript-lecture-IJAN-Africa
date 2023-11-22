document.addEventListener('DOMContentLoaded', () => {

const sel = document.querySelector('.selects');

  sel.addEventListener('change', function(){
    document.querySelector('#hello').style.color = sel.value
  })
    
});