/**
 * @jest-environment jsdom
 */

import addedTask from "../class.js";
import { clearCompleted, handleInputChange, taskStatus } from "./edit_update_clear.js";

describe('Task edit, update and clear', () => {
   test('edit task description', () => {
    //Arrange
    document.body.innerHTML = `
  
    <div id="enterTask">
        <input type="text" id="addTask" placeholder="Add to your list..." required>
       <button id="addButton"> <i class="fa fa-caret-right"></i></button>
    </div>
   
    <hr id="hrId">
    <ul id="list">

    <input contentEditable id="edible1" class="task-item"  value="Hello" />
    
    </ul>
    <div id="clear">Clear all completed</div></a>
    `;

    let inputValue = document.getElementById('edible1').value

    let taskArray = [
        {
            description : "Dance",
            completed : false,
            index: 0
        },
        {
            description : "Mother",
            completed : true,
            index: 1
        }
    ]
    //Act
    taskArray = handleInputChange(taskArray, inputValue)
    //Assert
    expect(taskArray[0].description).toEqual(inputValue)





//    let inputValue = document.getElementById('edible1').value

//     let taskArray = [
//         {
//             description : "Dance",
//             completed : false,
//             index: 0
//         },
//         {
//             description : "Mother",
//             completed : true,
//             index: 1
//         }
//     ]

//     let taskArray = handleInputChange(taskArray, inputValue)


//     expect(taskArray[0].description).toEqual(inputValue)

   })

   test('Update completed status', () => {
    addedTask.taskObject('Dance')

    let taskArray = taskStatus(addedTask.taskArray)

    expect(taskArray[0].completed).toBe(true)
   })
   
   
})