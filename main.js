const items = []

function addItme(){
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked:false
    }

    items.push(item)

    
}