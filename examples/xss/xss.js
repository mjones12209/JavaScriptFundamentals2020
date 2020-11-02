/**
 * This is demonstrating WHAT NOT TO DO.
 * It's a vulnerability called Cross Site Scripting (XSS), where an attacker
 * injects JavaScript into a legitimate website's page.
 * In this example, the attacker is trying to steal a user's password.
 *
 * To remediate this vulnerability, please use a DOM sanitizing library:
 * @see https://www.npmjs.com/search?q=xss
 */
const password = document.querySelector("#password");
password.insertAdjacentHTML(
  "afterend",
  '<img src="1" onerror="alert(document.querySelector(\'#password\').value)">'
);
