import './style.css'
import load_main from "./homepage.js"
import load_menu from "./menu.js"
console.log("Resturant page")
document.addEventListener('DOMContentLoaded',()=>{
    load_main()
})

function clearDOM(){
        const content = document.querySelector("#content")
        content.replaceChildren()
        console.log("content replaced: ",content)
}

const query = document.querySelector(".nav-links")
console.log(query)
query.addEventListener('click',(e)=>{
    console.log("Classlist")
    console.log(`class name ${e.target.classList}`)
    if(e.target.classList == 'home-btn'){
        clearDOM()
        load_main()
    }
    else if(e.target.classList == 'menu-btn'){
        clearDOM()
        load_menu()
    }
    else if(e.target.classList == 'reservation-btn'){
        clearDOM()
        // load_reservation()
    }
    else if(e.target.classList == 'about-btn'){
        clearDOM()
        // load_about()
    }
})