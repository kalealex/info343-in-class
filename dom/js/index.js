// @ts-check
"use strict";

//how many records to display at a time
const PAGE_SIZE = 100;

//references to the previous/next page <button>s
//the crazy `@type {HTMLButtonElement}` stuff tells vscode
//that the element we get back from querySelector() is not
//just any-old element, but a <button> element specifically.
//This allows us to use button-specific properties,
//like `.disabled`, without vscode showing type errors.'
//this has no effect at runtime, but will help us catch
//errors while coding.
const PREV_PAGE_BUTTON = /** @type {HTMLButtonElement} */(document.querySelector("#prev-page"));
const NEXT_PAGE_BUTTON = /** @type {HTMLButtonElement} */(document.querySelector("#next-page"));

//reference to the <input id="name-filter">
//here we again tell vscode that this is an <input>
//element specifically, so that we don't see errors
//when referring to the input-specific `.value` property.
const NAME_FILTER_INPUT = /** @type {HTMLInputElement} */(document.querySelector("#name-filter"));

//references to the <span id="current-page">
//and <span id="total-pages"> elements.
//these don't require any type declarations because
//there are no span-specific properties we need
//to reference.
const CURRENT_PAGE = document.querySelector("#current-page");
const TOTAL_PAGES = document.querySelector("#total-pages");

//sort records by name ascending
BABYNAMES.sort(function(rec1, rec2) {
    return rec1.name.localeCompare(rec2.name);
});

//our program's state
//At the heart of every program, including
//a web application, is a set of values known
//as the program's state. The UI is rendered
//based on the current value of this state.
//When the state changes, we re-render the UI.
//User actions trigger changes to the state, which
//triggers a re-render of the UI.
let state = {
    records: BABYNAMES, //the records to render (might be filtered)
    currentPage: 0      //the current page we are showing
};

//TODO: implement functions to render the current state
//to the page as new <tr> and <td> elements within the
//<tbody> element that is already in the page.

let tableBody = document.querySelector("tbody");
// tableBody.innerText = "Hello World"; // can add text to selected HTML element
let tableRow = document.createElement("tr"); // can create elements...
let tableData1 = document.createElement("td");
let tableData2 = document.createElement("td");
let tableData3 = document.createElement("td");
tableData1.innerText = "Darth";
tableData2.innerText = "M";
tableData3.innerText = "1";
tableBody.appendChild(tableData1); // and add elements to our selected HTML element
tableBody.appendChild(tableData2);
tableBody.appendChild(tableData3);
tableBody.appendChild(tableRow);
console.log(tableBody);


//TODO: listen for the "click" event raised by the 
//prev/next page buttons, mutate the state.currentPage,
//and re-render


//TODO: listen for the "input" event raised by the
//name filter <input> element, filter the state.records,
//and re-render


