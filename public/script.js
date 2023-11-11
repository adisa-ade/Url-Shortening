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
// CHANGE SHORTEN BACKGROUND IMAGE BASE ON SCREEN
const shorten = document.querySelector('.shorten')


if (window.screen.width > 767){    
    shorten.classList.add('desktop-shorten')
    
}
else(
    shorten.classList.add('mobile-shorten')       
)

const card = document.querySelector('.card')
const card1 = document.querySelector('.card1')

if(window.screen.width < 767){
    card.classList.add('cardone')
    card1.classList.add('cardtwo')   
}
else if(window.screen.width > 767){
    card.classList.add('cardonedesktop')
    card1.classList.add('cardtwodesktop')
}