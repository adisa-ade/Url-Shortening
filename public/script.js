const openNav = document.getElementById('hambuger')
const closeNav = document.getElementById('close')
const mobileNavToggle = document.querySelector('.toggle')
const shorten = document.querySelector('.shorten')
const card = document.querySelector('.card')
const card1 = document.querySelector('.card1')
const button = document.querySelector('.button-url')
const copyButton = document.querySelector('.button-copy')


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
    const linkToShorten = document.querySelector('.link-to-shorten')    
    const shortenLink = document.querySelector('.shorten-link')    
    
    
    const url = await fetch (`https://is.gd/create.php?format=json&url=${inputUrl.value}`)         
    let response = await url.json()        
    const link = document.querySelector('.link')
    link.style.display = 'block'
    const div = document.createElement('div')
    const p = document.createElement('p')
    const hr = document.createElement('hr')
    const newDiv = document.createElement('div')
    const pNewDiv = document.createElement('p')
    const buttonNewDiv = document.createElement('button')
    link.appendChild(div)
    div.appendChild(p)
    div.appendChild(hr)
    div.appendChild(newDiv)
    newDiv.appendChild(pNewDiv)
    newDiv.appendChild(buttonNewDiv)
    div.classList.add('flex','flex-col','space-y-3','md:space-y-0','md:flex-row','md:justify-between','md:items-center')
    p.classList.add('link-to-shorten', 'text-darkViolet', 'break-words')
    hr.classList.add('md:hidden', 'rule border-1', 'opacity-90', 'border-gray', 'w-full', 'my-6')
    newDiv.classList.add('shorten-link', 'flex', 'flex-col', 'space-y-3', 'md:space-y-0', ' md:flex-row', 'md:items-center', 'md:space-x-3')
    pNewDiv.classList.add('text-cyan', 'break-words')
    buttonNewDiv.classList.add('button-copy', 'bg-cyan', 'p-5', 'md:p-2', 'lg:p-2', 'text-white', 'font-bold', 'rounded-md')
    buttonNewDiv.textContent = 'Copy'
    
    linkToShorten.textContent = inputUrl.value
    shortenLink.textContent = response.shorturl
    const regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
    if (inputUrl.value == '' || inputUrl.value !== regex) {
        err.textContent = response.errormessage
        err.style.display ='block'
        inputUrl.classList.add('longurl')
    }
        
}
      
     
  
//  copyButton.addEventListener('click', () => {
//     newURL.select()
//     window.navigator.clipboard.writeText(newURL.value)
//     copyButton.textContent = 'Copied!'
//  })

        