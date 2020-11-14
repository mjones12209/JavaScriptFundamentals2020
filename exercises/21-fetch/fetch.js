(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */



const dogButton = document.querySelector(".button-primary");
const imgTag = document.querySelector("#image");

dogButton.addEventListener('click',(event)=>{
  fetch("https://dog.ceo/api/breeds/image/random", {
    method: 'GET'
  })
    .then((response)=>response.json())
    .then((response)=>{
      console.log(response);
      imgTag.setAttribute('src',response.message);      
  })
    .catch((data)=>console.log(data));
  })


})(); 