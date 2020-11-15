/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */


const button = document.querySelector(".btn-outline-secondary");

button.addEventListener("click",(event)=>{
    (async ()=>{
        try {
            let response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            } else {
                let data = await response.json();
                let blockQuote = document.querySelector("#quote");
                blockQuote.textContent = data;
            }
        }
        catch(e) {
            console.log(e);
        }
    })();
});