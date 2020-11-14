/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 * 
 */
const dropdown = document.querySelector("#dropdown");
const imgTag = document.querySelector(".img-rounded");
console.log(imgTag)
let characterInfo = [];
 axios({
     url: "https://rickandmortyapi.com/api/character/",
     method: 'GET'

 })
 .then((response)=>{
     console.log(response.data.results);
     response.data.results.forEach((character) => {
         let htmlStr = `<option>${character.name}</option>`;
         characterInfo.push({
            name: character.name,
            url: character.image
        });
         dropdown.insertAdjacentHTML("beforeend",htmlStr);
     });
     dropdown.addEventListener('change', (event)=>{
        ;
        for (let character of characterInfo){
            if(character.name == event.target.value){
                imgTag.setAttribute("src",character.url);
            }
        }
     });
 })
 .catch((error)=>console.log(error));

