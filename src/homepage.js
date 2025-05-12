import foodImg1 from "./image1.jpg"
import foodImg2 from "./image2.jpg"
import foodImg3 from "./image3.jpg"

function intro_section(content){
    const main_info = document.createElement("div")
    main_info.classList.add("front-images")
    const img1 = document.createElement("img")
    img1.src = foodImg1
    const img2 = document.createElement("img")
    img2.src = foodImg2
    const img3 = document.createElement("img")
    img3.src = foodImg3
    main_info.append(img1, img2, img3)
    content.append(main_info)
}

export default function initial_load(){
    console.log("loading the page")
    const content = document.querySelector("#content")
    console.log(content)
    intro_section(content)
}