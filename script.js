'use strict'
const burgerMenuIcon=document.querySelector('.burgerMenuIcon')
const burgerMenu=document.querySelector('.burgerMenu')
const closeTag=document.querySelector('.closeTag i')
burgerMenuIcon.addEventListener('click', ()=>{
    burgerMenu.classList.remove('unActiveMenu')
    document.body.style.overflowY='hidden'
})
closeTag.addEventListener('click', ()=>{
    burgerMenu.classList.add('unActiveMenu')
    document.body.style.overflowY='auto'
})
