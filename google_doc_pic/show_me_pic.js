// ==UserScript==
// @name         Google Doc, Show me Pic.
// @namespace    https://github.com/chaneyzorn/dotfiles
// @version      0.1
// @description  Google Doc Big Picture Show!
// @author       ChaneyZorn
// @match        https://docs.google.com/document/*d/*
// @grant        GM_addStyle
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    function hookImg() {
        let images = document.getElementsByTagName("image");
        console.log(`hook ${images.length} images`);
        for (let img of images) {
            img.onclick = () => {
                let xhref = img.getAttribute("xlink:href");
                console.log(xhref);
                window.open(xhref);
            }
        }
    }
    setInterval(hookImg, 5000);
})();