// ==UserScript==
// @name         Fix style by pupsiso
// @namespace       https://github.com/pupsiso
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eosago.euro-ins.ru/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=euro-ins.ru
// @grant        none
// ==/UserScript==

var hs = document.getElementsByTagName('style');
hs[0].parentNode.removeChild(hs[0]);