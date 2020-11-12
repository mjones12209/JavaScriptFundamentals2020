(function () {
  /**
   * Ignore me. This just simply populates the dropdowns with a list of currencies.
   * @param {void}
   */

  const currencies = Object.keys(exchangeRates);

  const populateDropdowns = (elem) => {
    let htmlStr = "";
    currencies.forEach(
      (currency) =>
        (htmlStr += `<option value="${currency}">${currency}</option>`)
    );
    elem.insertAdjacentHTML("beforeend", DOMPurify.sanitize(htmlStr));
  };

  populateDropdowns(document.querySelector("#currency1"));
  populateDropdowns(document.querySelector("#currency2"));
})();
