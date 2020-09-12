const toggle_menu = document.getElementsByClassName('toggle-menu')[0]
const navbar_links =  document.getElementsByClassName('navbar-links')[0]

toggle_menu.addEventListener('click', ()=>{
    navbar_links.classList.toggle('active')
})

// Main Content
const main_content =  document.getElementsByClassName('main-content')[0]
console.log(main_content.children)


for (let i=0; i<main_content.children.length; i++){
    main_content.children[i].addEventListener('click', ()=>{
        console.log('click', i)
        const card = document.getElementsByClassName('card')[i]
        card.classList.toggle('active')
        
    })
}
