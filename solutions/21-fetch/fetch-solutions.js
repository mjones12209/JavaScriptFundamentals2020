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

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET" /** @see comment below */,
    })
      .then((response) => response.json())
      .then((response) => {
        const image = document.querySelector("#image");
        image.src = response.message;
      })
      .catch((err) => console.error(err));
  });

  /**
   * We could have also solved this excersie this way, because fetch uses
   * the method GET by default:
   * @example
   * fetch("https://dog.ceo/api/breeds/image/random").then( // ...
   */
})();
