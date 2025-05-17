import './introStyle.css'
import { nodeCreator } from './helper'
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
    main_info.classList.add("front-images")
    images.forEach(imgData => {
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        main_info.appendChild(img);
    });
    content.append(main_info)
}

function info_section(content){
    const info = nodeCreator({parentNode:content, classNames:["info-section"]})
    const info_content = nodeCreator({parentNode:info, classNames:["info-section-content"]})
    const imgSection = nodeCreator({parentNode:info, classNames:["info-section-imgs"]})
    const info_content_sec = nodeCreator({parentNode:imgSection, classNames:["info-section-content-sec"]})
    info_content.textContent = "lorem ipsum yeah!!!!"
    const img = nodeCreator({parentNode:imgSection,childNode:"img",classNames:["info-section-img"]})
    img.src = foodImg4
    img.alt = "food image"
}

export default function initial_load(){
    const content = document.querySelector("#content")
    intro_section(content)
    info_section(content)
}
