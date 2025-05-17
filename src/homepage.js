import './introStyle.css'
import { nodeCreator } from './helper'
import { INTRO_CONTENT_TEXT, DINING_EXPERIENCE, INCREDIENTS_INFO, CULINARY_INFO } from './constant'
import foodImg1 from "../assets/image1.jpg"
import foodImg2 from "../assets/image2.jpg"
import foodImg3 from "../assets/image3.jpg"
import foodImg4 from "../assets/image4.jpg"

const images = [
        { src: foodImg1, alt: "Delicious dish 1" },
        { src: foodImg2, alt: "Delicious dish 2" },
        { src: foodImg3, alt: "Delicious dish 3" }
    ];


function intro_section(content){
    const main_info = document.createElement("div")
    main_info.classList.add("resturant-info")
    images.forEach(imgData => {
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.loading = 'lazy'
        // img.onload = ()=>{
        //     img.classList.add("img-loaded")
        // }
        // img.classList.add("img-loading")
        main_info.appendChild(img);
    });
    content.append(main_info)
}

function info_section(content){
    const info = nodeCreator({parentNode:content, classNames:["info-section"]})
    const infoContent = nodeCreator({parentNode:info, classNames:["info-section-content"]})
    infoContent.innerHTML = INTRO_CONTENT_TEXT
    
    const diningInfo = nodeCreator({parentNode:info, classNames:["info-dining"]})
    const diningInfoContent = nodeCreator({parentNode:diningInfo, classNames:["dining-info-content"]})
    diningInfoContent.innerHTML = DINING_EXPERIENCE
    const diningInfoImg = nodeCreator({childNode:'img',parentNode:diningInfo, classNames:["dining-info-content-img"]})
    diningInfoImg.src = foodImg4
    diningInfoImg.alt = "food image"
    diningInfoImg.loading = 'lazy'

    const culinaryInfo = nodeCreator({parentNode:info, classNames:["info-dining"]})
    const culinaryInfoImg = nodeCreator({childNode:'img',parentNode:culinaryInfo, classNames:["dining-info-content-img"]})
    culinaryInfoImg.src = foodImg4
    culinaryInfoImg.alt = "food image"
    culinaryInfoImg.loading = 'lazy'
    const culinaryInfoContent = nodeCreator({parentNode:culinaryInfo, classNames:["dining-info-content"]})
    culinaryInfoContent.innerHTML = CULINARY_INFO

    const ingredientsInfo = nodeCreator({parentNode:info, classNames:["info-dining"]})
    const incredientsInfoContent = nodeCreator({parentNode:ingredientsInfo, classNames:["dining-info-content"]})
    const ingredientsInfoImg = nodeCreator({childNode:'img',parentNode:ingredientsInfo, classNames:["dining-info-content-img"]})
    ingredientsInfoImg.src = foodImg4
    ingredientsInfoImg.alt = "food image"
    ingredientsInfoImg.loading = 'lazy'
    incredientsInfoContent.innerHTML = INCREDIENTS_INFO
}

export default function initial_load(){
    const content = document.querySelector("#content")
    intro_section(content)
    info_section(content)
}
