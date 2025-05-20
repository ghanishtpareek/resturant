export default function load_menu(){
    const content = document.querySelector("#content")
    console.log("laoding menu")
    const menu  = document.createElement("div")
    menu.textContent = "hello we are a menu of top resturant in the city"
    content.append(menu)
}