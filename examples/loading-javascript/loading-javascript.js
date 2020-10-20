/**
 * You should put all of your code in an
 * Immediately Invoked Functional Express (IIFE)
 * like this:
 */
(function () {
  console.log("External JavaScript");
  const protectedUserPassword = "protected1234";
})();

/**
 * This can be can accessed by an attacker with
 * @example window.userPassword
 */
userPassword = "pass1234";
