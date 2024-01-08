const menuBar = document.querySelector('.nav-icon')
const menuList = document.querySelector('.nav-list')
const links = document.querySelectorAll('.nav-link')

menuBar.addEventListener('click', function(){
    menuList.classList.toggle('nav-list-show')
})

links.forEach(function(link){

    link.addEventListener('click', function(){
        menuList.classList.remove('nav-list-show')
    })

})