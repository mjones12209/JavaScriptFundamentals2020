/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
 */
const firstListItem = document.querySelector("li");

console.log(firstListItem);

const myIdList = document.querySelector("#myId");

console.log(myIdList);


const allListItems = document.querySelectorAll("li");

console.log(allListItems);

const allBgWarning = document.querySelectorAll(".bg-warning");

console.log(allBgWarning);

const twoCells = document.querySelectorAll(".bg-success > div.col");

console.log(twoCells);

const bottomElements = document.querySelectorAll("[data-mydata]");

console.log(bottomElements);      

const classList = document.querySelectorAll("div");
classList.forEach((item) => {
    if(item.matches("[data-targetOne]")) {
        item.style.backgroundColor = "blue"
    }
})