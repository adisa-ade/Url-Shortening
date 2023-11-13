const openNav = document.getElementById('hambuger')
const closeNav = document.getElementById('close')
const mobileNavToggle = document.querySelector('.toggle')
const shorten = document.querySelector('.shorten')
const card = document.querySelector('.card')
const card1 = document.querySelector('.card1')
const button = document.querySelector('.button-url')


// MOBILE NAVIGATION
openNav.addEventListener('click', () => {
    openNav.style.display = 'none'
    closeNav.style.display = 'block'
    mobileNavToggle.style.display = 'block'
})
closeNav.addEventListener('click', () => {
    openNav.style.display = 'block'
    closeNav.style.display = 'none'
    mobileNavToggle.style.display = 'none'
    mobileNavToggle.classList.add('transition duration-700 ease-in')
})

// CHANGE SHORTEN INPUN BACKGROUND IMAGE BASE ON SCREEN SIZE
if (window.screen.width > 767){    
    shorten.classList.add('desktop-shorten')
}
else(
    shorten.classList.add('mobile-shorten')           
)

// ADD AFTER EFFECT BASE ON SCREEN SIZE
if(window.screen.width < 767){
    card.classList.add('cardone')
    card1.classList.add('cardtwo')   
}
else if(window.screen.width > 767){
    card.classList.add('cardonedesktop')
    card1.classList.add('cardtwodesktop')
}

// CHANGE BOOST BACKGROUND IMAGE BASE ON SCREEN SIZE
const boost = document.querySelector('.boost')
    if (window.screen.width > 767){
        boost.classList.add('desktop-boost')
    }
    else{
        boost.classList.add('mobile-boost')
    }


button.addEventListener('click', shortenLink)

    
async function shortenLink(){         
    const inputUrl = document.getElementById('longurl')
    const err = document.querySelector('.err')    
    const url = await fetch (`https://is.gd/create.php?format=json&url=${inputUrl.value}`)         
    let response = await url.json()
    err.textContent = response.shorturl
    err.style.display ='block'
    
    const regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/

    if (inputUrl.value == '' || inputUrl.value !== regex) {
        err.textContent = response.errormessage
        err.style.display ='block'
        inputUrl.classList.add('longurl')
    }
        
}
      
     
// const promise = Promise.reject(new Error('Oops'));

// // Unwrap the promise's error
// const err = await promise.catch(err => err);
// err.message; 
        
//  copyButton.addEventListener('click', () => {
//     newURL.select()
//     window.navigator.clipboard.writeText(newURL.value)
//  })