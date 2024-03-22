const nameArray = [] //create list to store names

function addName () { 
//get a trimmed version of name from input box
const nameInput = document.getElementById('nameInput')
const name = document.getElementById('nameInput').value.trim()
nameArray.push(name)
displayNames()
nameInput.value = '' //clears input box
}

function displayNames(){
    const nameList = document.getElementById('nameList') //get ul element
    nameList.innerHTML = '' //clears the list

    for (let i = 0; i < nameArray.length; i++){
        const name = nameArray[i] //get current name from array

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
    }

}




document.getElementById('addNameBtn').addEventListener('click', addName)