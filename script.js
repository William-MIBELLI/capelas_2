let burger = document.querySelector('.burger-btn')
let menu = document.getElementById('my-nav')


burger.addEventListener('click', (e) => {
    menu.style.display = menu.style.display == 'flex' ? 'none' : 'flex'
    e.stopPropagation()
})
