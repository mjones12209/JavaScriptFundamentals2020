/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */
const alertButton = document.querySelector("[data-buttonAlert]");

alertButton.addEventListener("click", () => {
    alert("Alert Me!");
});

/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */

 const creditCardButton = document.querySelector("[data-creditCardButton]");

 creditCardButton.addEventListener("click",()=>{
     creditCardButton.textContent = "Loading...";
    creditCardButton.disabled = true;
 });

/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

const commentButton = document.querySelector("[data-commentButton]");
const commentsDiv = document.querySelector("[data-commentDiv]");

// console.log(commentButton);

commentButton.addEventListener("click", ()=>{
    commentsDiv.classList.toggle("hidden");
});



/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */

const inputBox = document.querySelector("[data-inputbox]");
const textBox = document.querySelector("[data-showtext]");


inputBox.addEventListener('keyup',() => {
    textBox.textContent = inputBox.value;
});

// console.log(inputBox)
// console.log(textBox)

/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

 const searchBox = document.querySelector("[data-searchbox]");
 const formHanlder = document.querySelector(".form-group");
 const searchButton = document.querySelector("[data-searchbutton]");
 const paragraph = document.querySelector("[data-para]");

 const submitFunc = (event) => {

 }

 formHanlder.addEventListener('submit', (event)=> {
    let searchText = searchBox.value;
    paragraph.textContent = `No results for ${searchText} found`;
    event.preventDefault();
 });


/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */
const contButton = document.querySelector("div.form-check-inline ~ button.btn");
const textDanger = document.querySelector("div.text-danger > small");
const textSuccess = document.querySelector("div.text-success > small");
const checkboxBtn = document.querySelector("[type=checkbox]");
const agreeText = document.querySelector("div .form-check-label");

textSuccess.classList.add("hidden");
textDanger.classList.add("hidden");
checkboxBtn.classList.remove("is-invalid");

contButton.addEventListener('click', (event)=> {
    if(checkboxBtn.checked) {
        textSuccess.classList.remove("hidden");
        checkboxBtn.classList.forEach(classItem => {
            if(classItem == "is-invalid"){
                checkboxBtn.classList.toggle("is-invalid");
            }
        });
        
    }
    if(!checkboxBtn.checked){
        checkboxBtn.classList.add("is-invalid");
        alert("You must agree to the terms and conditions");
        event.preventDefault();
    }
});

// console.log(textDanger);
// console.log(textSuccess);
// console.log(contButton);
// console.log(agreeText);
/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */
 
(function(){
    const dataGroup1 = document.querySelectorAll("[data-group='1']");
    const dataGroup2 = document.querySelectorAll("[data-group='2']");

    const dataGroup1Btn = document.querySelector("[data-datagroup1Btn]");
    const dataGroup2Btn = document.querySelector("[data-datagroup2Btn]");
    
    const nextButton = document.querySelector("[aria-label='Next']");
    const previousButton = document.querySelector("[aria-label='Previous']")
   
    dataGroup2.forEach((row)=>{
       row.classList.add("hidden");
    });

    nextButton.addEventListener('click', ()=>{
        dataGroup2.forEach((row)=>{
            row.classList.remove('hidden');
        })
        dataGroup1.forEach((row)=>{
            row.classList.add("hidden");
        });
    });
    previousButton.addEventListener('click', ()=>{
        dataGroup1.forEach((row)=>{
            row.classList.remove('hidden');
        })
        dataGroup2.forEach((row)=>{
            row.classList.add("hidden");
        });
    });

    dataGroup2Btn.addEventListener('click', ()=>{
        dataGroup2.forEach((row)=>{
            row.classList.remove('hidden');
        })
        dataGroup1.forEach((row)=>{
            row.classList.add("hidden");
        });
    }); 
    dataGroup1Btn.addEventListener('click', ()=>{
        dataGroup1.forEach((row)=>{
            row.classList.remove('hidden');
        })
        dataGroup2.forEach((row)=>{
            row.classList.add("hidden");
        });
    });
})();






