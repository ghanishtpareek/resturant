import foodImg1 from "./image1.jpg"

function intro_section(content){
    const main_info = document.createElement("div")
    main_info.classList.add("front-images")
    const img1 = document.createElement("img")
    img1.src = foodImg1
    main_info.append(img1)
    content.append(main_info)
}

export default function initial_load(){
    console.log("loading the page")
    const content = document.querySelector("#content")
    console.log(content)
    intro_section(content)
}