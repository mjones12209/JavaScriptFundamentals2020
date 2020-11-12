/**
 * Do not change me. This is faking an AJAX call.
 * Converts a money amount from one currency to another.
 *
 * @example
 * const amount = await fakeAxios({
 *   ...
 *   data: {
 *     currency1: "Indian Rupee",
 *     currency2: "Canadian Dollar",
 *     amount: 100 // amount for currency1
 *   }
 * });
 */
(function () {
  const fakeAxios = (obj) => {
    console.group("AJAX");

    try {
      console.log(`REQUEST ${obj.url || ""} ${obj.data || ""}`);

      const { currency1, currency2, amount } = JSON.parse(obj.data || "{}");

      return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          if (!Number.isInteger(parseInt(amount)) || !currency1 || !currency2) {
            return reject();
          }

          const exchangeRate = exchangeRates[currency2][currency1];
          const response = {
            amount: (amount * exchangeRate).toFixed(4),
          };

          console.log(`RESPONSE ${JSON.stringify(response)}`);
          console.groupEnd();

          return resolve(response);
        }, 100);
      });
    } catch (e) {
      console.groupEnd();
      throw e;
    }
  };

  window.fakeAxios = fakeAxios;
})();
