// ==UserScript==
// @name         Clean Moodle Links on Click
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes "forcedownload=1" from Moodle links before opening
// @match        *://moodle.u-paris.fr/* //change this if you are from a different university
// @grant        none
// ==/UserScript==

document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link && link.href.includes("moodle.u-paris.fr") && link.href.includes("forcedownload=1")) {
        event.preventDefault(); // Prevents the original link from opening
        const newHref = link.href.replace(/([?&])forcedownload=1(&|$)/, '$1').replace(/[\?&]$/, '');
        window.open(newHref, "_blank"); // Opens the cleaned link in a new tab
    }
});
