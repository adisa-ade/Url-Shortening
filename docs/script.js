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
const inputUrl = document.getElementById('longurl')
async function shortenLink(){         
    const url = await fetch (`https://is.gd/create.php?format=json&url=${inputUrl.value}`)         
    let response = await url.json()        
    shortenApi(response)
    error(response)
}
    
const regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/

function error(data){
    const err = document.querySelector('.err')    
    if (inputUrl.value == '' || !inputUrl.value.match(regex)) {
        err.textContent = data.errormessage
        err.style.display ='block'
        c
    }

    else{
        err.style.display ='none'
        inputUrl.classList.remove('longurl')
    }
        
}
const listItems = document.querySelector('list-item')
const link = document.querySelector('.link')

    function shortenApi(data) {
        if(inputUrl.value.match(regex)){
        const li = document.createElement('li')
        li.classList.add('list')
        const p1 = document.createElement('p')
        p1.textContent = inputUrl.value
        p1.classList.add('linkToShorten')
        const span = document.createElement('span')
        span.classList.add('span')
        const p2 = document.createElement('p')
        p2.textContent = data.shorturl
        p2.classList.add('shortenLink')
        const btn = document.createElement('button')
        btn.textContent = 'Copy'
        btn.classList.add('button-copy')        
        link.appendChild(li)
        li.appendChild(p1)        
        li.appendChild(span)
        span.appendChild(p2)
        span.appendChild(btn)             
        link.style.display = 'block'        
        
        const copyButton = document.querySelector('.button-copy')
        const newURL = document.querySelector('p2')
        copyButton.addEventListener('click', () => {
            newURL.select()
            window.navigator.clipboard.writeText(newURL.value)
            copyButton.textContent = 'Copied!'
         })
        }        
    } 
  
 

        