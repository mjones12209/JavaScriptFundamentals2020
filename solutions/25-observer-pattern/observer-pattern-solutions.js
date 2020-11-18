(async function () {
  /**
   * You will not need to change the "Observable" function here.
   * The part of the code that you need to change is below.
   */

  const Observable = () => {
    /**
     * List of observers
     */
    const listeners = new Set([]); // Set mandates that each listener is unique
    return {
      /**
       * Adds an observer to the list
       * @param function listener
       */
      subscribe: (listener) => {
        listeners.add(listener);
      },
      /**
       * Removes an observer from the list
       * @param function listener
       */
      unsubscribe: (listener) => {
        listeners.delete(listener);
      },
      /**
       * Broadcasts the update to each item in the list
       * @param * arguments can be anything
       */
      notify: (...args) => {
        listeners.forEach((listener) => listener(...args));
      },
    };
  };

  /**
   * You will make a currency change tool.
   * When the user has filled out both currencies, you will call on an API
   * to convert a monetary amount from one currency to another.
   *
   * It should work like this:
   * @see exercises/25-observer-pattern/currency-converter.gif
   *
   * You will need to refactor the solution below. It should:
   * 1. Use the observer pattern
   * 2. Work for both dropdown boxes. The example code below is only partially complete.
   * It will only make an AJAX request after the user selects a currency from the right dropdown.
   * You will want to convert the currency when the user selects a value from the left dropdown too.
   *
   * Note that you will only want to make an AJAX call if the user has filled out both currencies.
   *
   * For an example with the observer pattern,
   * @see https://codesandbox.io/s/observer-pattern-no-bundler-n2ukw?file=/src/index.js
   */

  // Storing the DOM.
  // It's better performance to do this only once.
  const currency1 = document.querySelector("#currency1");
  const currency2 = document.querySelector("#currency2");
  const amountInput = document.querySelector("#amount");

  const observable = Observable();

  const convertCurrency = async () => {
    // Here I am checking to see if both dropdowns are complete.
    // Only when both are complete, will I make the AJAX request.
    if (currency1.value && currency2.value) {
      const response = await fakeAxios({
        url: "http://pretendsite.com/currency",
        method: "POST",
        data: JSON.stringify({
          currency1: currency1.value,
          currency2: currency2.value,
          amount: 1,
        }),
      });

      // Displays the converted amount
      amountInput.value = response.amount;
    }
  };

  // When I subscribe this function,
  // it is called on whenever the observable is notified of a change
  observable.subscribe(convertCurrency);

  // When the change event is triggered - that is,
  // a user select a new currency from a dropdown -
  // the observer will notify any subscribed functions
  // about the change.
  currency1.addEventListener("change", observable.notify);
  currency2.addEventListener("change", observable.notify);
})();
