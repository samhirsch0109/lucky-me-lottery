const nameArray = [] //Create a list to store names

function addName () {
  //get a trimmed version of the name from the input box
  const nameInput = document.getElementById('nameInput')
  const name = nameInput.value.trim()

  if (name === '') {
    // Display an error message
    alert('Please enter a name!');
    return; // Exit the function without adding an empty name
}
//add name to the array
  nameArray.push(name)
  //display updated list
  displayNames()
  //clear input box
  nameInput.value = ''
}

//function to show list of names
function displayNames(){
    const nameList = document.getElementById('nameList')//get UL element 
    nameList.innerHTML = '' //clears the list 

    //loop for names
    for (let i = 0; i < nameArray.length; i++){
        const name = nameArray[i] //get the current name from the array

        //create list item
        const li = document.createElement('li')
        li.className = 'list-group-item'

        //span to hold the name text
        const span = document.createElement('span')
        span.textContent = name
    //append the span to the list
        li.appendChild(span)
        //append list to the UL element
        nameList.appendChild(li)

    }

}


//function to pick random name
function pickRandomName () {
   
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''

  //create a random number to pick random name 
  const randomNumber = Math.floor(Math.random() * nameArray.length)
  const randomName = nameArray[randomNumber]

  //display name
  randomNameDiv.textContent = randomName

  randomNameDiv.innerHTML = `Congrats ${randomName}, you were chosen!`

//remove name from array
  nameArray.splice(randomNumber, 1)

  //update list of names 
  displayNames()

}



// add onclick to add name btn
document.getElementById('addNameBtn').addEventListener('click', addName)

// add onclick to add name btn
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)