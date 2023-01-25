const about = document.querySelector('.about')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')

about.addEventListener('click',function(e){
   const id = e.target.dataset.id

   if (id){
    btns.forEach(function(i){
        i.classList.remove('active')
        e.target.classList.add('active')
    });
    // Hide other articles
    articles.forEach(function(j){
        j.classList.remove('active')
    });
    const element = document.getElementById(id)
    element.classList.add('active')

   }
})


