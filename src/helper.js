// export function nodeCreator(element,classNames=[],parentNode = "body"){
//     console.log(element, parentNode)
//     if(arguments.length > 2){
//         const variable = document.createElement(element)
//         if (!classNames == []){
//             variable.classList.add(...classNames)
//         }
//         parentNode.appendChild(variable)
//         return variable
//     }
//     else if(arguments.length > 1){
//         const variable = document.createElement(element)
//         variable.classList.add(...classNames)
//         return variable
//     }
//     else{
//         const variable = document.createElement(element)
//         return variable
//     }
// }

export function nodeCreator({childNode = "div", parentNode = null, classNames = []}){
    const variable = document.createElement(childNode)
    if(classNames.length > 0){
        variable.classList.add(...classNames)
    }
    if(parentNode instanceof Node){
        parentNode.appendChild(variable)
    }
    else{
        document.body.append(variable)
    }
    return variable
}