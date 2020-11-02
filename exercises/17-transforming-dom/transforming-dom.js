/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

(function() {
    document.querySelector("div.container.mt-3.mb-3 > div.alert.alert-danger").setAttribute("role","alert");

    document.querySelector("a[href^=https]").setAttribute("href","https://developer.mozilla.org/en-US/docs/Web/JavaScript");
    
    document.querySelector("body > div > div:nth-child(3)").textContent = "I am victorious";
    
    document.querySelector("body > div > div:nth-child(4)").style.backgroundColor = "red";
    
    document.querySelector("body > div > div:nth-child(5)").classList.add("text-success");
    
    document.querySelector("body > div > div:nth-child(6)").style.display = "none";
    
    document.querySelector("body > div > div.alert.alert-success.hidden").classList.remove("hidden")
    
    
    const bottomDiv = document.querySelector("button.btn.btn-primary.ml-1.m4-1");
    
    const textDarkDiv = document.querySelector("div.text-dark");

    if(bottomDiv.matches("btn-primary")){
        textDarkDiv.textContent = "✓ blue";
    }

    // bottomDiv.classList.forEach((classItem) => {
    //     if(classItem == "btn-primary"){
    //         textDarkDiv.textContent = "✓ blue";
    //     }
    // });


    // for(let classItem of bottomDiv.classList) {
    //     if(classItem === "btn-primary"){
    //         textDarkDiv.textContent = "✓ blue";
    //     } 
    // }
    
})();

