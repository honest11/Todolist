'use strict';


// select all needed elements

const input = document.getElementById('todo-input');
const btnAdd = document.getElementById('add-button');
const ulTodolist = document.getElementById('todo-list')


//  A button click event for adding the Todolist 
btnAdd.addEventListener('click', (e)=>{

    // an event to stop auto refresh in website
    e.preventDefault()

    // Creating a <i></li> element
    let li = document.createElement('li')
    // appending the input values typed into the <i></li> element which was created
    li.append(input.value)

    // appending the <i></li> element to my document body
    document.body.appendChild(li)

    // appending the <i></li> element to my ul tag
    ulTodolist.appendChild(li)
})
