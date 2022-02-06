"use strict";

const CSS_CONTENT = '* { background: #444 !important; color: white !important; }';
var disabled = true;

document.addEventListener("DOMContentLoaded", function(){
	var head = document.head || document.getElementsByTagName('head')[0];

	var style = document.createElement('style');
	style.id = 'simplydark-styles';
	style.disabled = true;
	style.type = 'text/css';

	head.appendChild(style);
});

browser.runtime.onMessage.addListener(request => {
	const styles = document.getElementById('simplydark-styles');

	if (styles) {
		if (disabled) {
			styles.innerHTML = CSS_CONTENT;
		} else {
			styles.innerHTML = '';
		}

		disabled = ! disabled;
	}
});
