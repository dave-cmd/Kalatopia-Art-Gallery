const toggle_menu = document.getElementsByClassName('toggle-menu')[0]
const navbar_links =  document.getElementsByClassName('navbar-links')[0]

toggle_menu.addEventListener('click', ()=>{
    navbar_links.classList.toggle('active')
})