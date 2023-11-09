const hambuger = document.getElementById('hambuger')
const close = document.getElementById('close')
const mobileNav = document.querySelector('.toggle')

hambuger.addEventListener('click', () => {
    hambuger.style.display = 'none'
    close.style.display = 'block'
    mobileNav.style.display = 'block'
})
close.addEventListener('click', () => {
    hambuger.style.display = 'block'
    close.style.display = 'none'
    mobileNav.style.display = 'none'
    mobileNav.classList.add('transition duration-700 ease-in')
})
