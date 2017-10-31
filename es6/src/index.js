// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

class Task {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }

    render() {
        let li = document.createElement("li");
        li.textContent = this.title;
        
        if (this.done) {
            li.classList.add("done");
        }

        li.addEventListener("click", () => { // lambda functions
            this.done = !this.done; // change the object in memory
            li.classList.toggle("done"); // change the ui
        })
        return li;
    }
}

class TaskList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    purge() {
        this.tasks = this.tasks.filter(task => !task.done);
    }

    render() {
        let ul = document.createElement("ul");
        this.tasks.forEach(task => {
            ul.appendChild(task.render()); // calls the render function for each Task class item
        })
        return ul;
    }
}

class Button {
    constructor(label) {
        this.label = label;
    }

    render() {
        let button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.textContent = this.label;
        return button;
    }
}

class TaskForm {
    //constructor() {}

    render() {
        let form = document.createElement("form");
        form.classList.add("pb-4");
        let input = document.createElement("input");
        input.classList.add("form-control");
        input.setAttribute("placeholder", "what do you need to do?");
        form.appendChild(input);
        return form;
    }
}

class App {
    constructor(parentElement, taskList) {
        this.parentElem = parentElement;
        this.taskList = taskList;
        this.taskForm = new TaskForm();
        this.purgeButton = new Button("Purge");
    }

    render() {
        this.parentElem.textContent = ""; // empty the task list

        let form = this.parentElem.appendChild(this.taskForm.render()); // render our new task form
        let ul = this.parentElem.appendChild(this.taskList.render()); // render our task list
        let button = this.parentElem.appendChild(this.purgeButton.render()); // render our button

        form.addEventListener("submit", evt => { // deal with form submission
            evt.preventDefault();
            let input = form.querySelector("input"); // get reference to our input button
            this.taskList.addTask(new Task(input.value));
            let updatedBrowser = this.taskList.render(); // update our list of tasks
            this.parentElem.replaceChild(updatedBrowser, ul); // push the update to the user's view
            ul = updatedBrowser;
            input.value = ""; 
        });

        button.addEventListener("click", () => { // call purging function and replace ul on screen
            this.taskList.purge();
            let updatedUI = this.taskList.render();
            this.parentElem.replaceChild(updatedUI, ul);
            ul = updatedUI;
        })
    }
}

// actually do something to the html
let app = new App(document.querySelector("#app"),
    new TaskList([
        new Task("learn ES6 features"),
        new Task("get a dog")
    ])
);
app.render();