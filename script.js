'use strict';


// select all needed elements

const input = document.getElementById('todo-input');
const btnAdd = document.getElementById('add-button');
const ulTodolist = document.getElementById('todo-list');

// calling the created btn variable outside to make it global
let btnDel, li;

//  A button click event for adding the Todolist 
btnAdd.addEventListener('click', (e)=>{

    // an event to stop auto refresh in website
    e.preventDefault();

    // adding an if statement so that an empty input value wont work
    if (input.value === '') {
       return;
    } 
    // the else statement only runs when a value is entered in the input
    else {

        // Creating a <i></li> element
        let li = document.createElement('li');
        // appending the input values typed into the <i></li> element which was created
        li.append(input.value);
        // appending the <i></li> element to my document body
        document.body.appendChild(li);
        // appending the <i></li> element to my ul tag
        ulTodolist.appendChild(li);

        // Creating a delete button element
        let btnDel = document.createElement('button');
        // appending the created btn element inside my li element
        let text = document.createTextNode('DELETE');
        btnDel.appendChild(text)
        // appending the created text inside the btn element 
        li.appendChild(btnDel)
    }

    // empties the input fields after hitting the add button
    input.value = '';
})