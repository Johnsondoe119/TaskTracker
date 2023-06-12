window.addEventListener("load", () => {
  //when the window loadswe are going to activate the folllowing code
  //we are getting form element with the id "new-task-form", input element with the id "new-task-input", and elements with the id "task"
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  
//adding an even listener to the submit event
  form.addEventListener("submit", (e) => {
    //prevent the form from being submitted and the page from refreshing
    e.preventDefault();
//get the user input, which is the task
    const task = input.value;
//create new div to hold task contentand add the css task class to that element
    const task_el = document.createElement("div");
    task_el.classList.add("task");
//in the next few we do the same thing for content, and text and add the css class  text to them
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
//append task content element to the task element
    task_el.appendChild(task_content_el);
//create an input element for the task tex
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
//append the task element to the task content element
    task_content_el.appendChild(task_input_el);
//create div for task actions
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
//create button element for editing the task and set its tex
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";
//for deleting
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";
//apppend the two buttons, task action, task element
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);
//clear input feild
    input.value = "";
//add event listener to edit button
    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });
  });
});
