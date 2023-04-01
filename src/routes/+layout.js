import { browser } from '$app/environment';
import { variants, labels } from '@catppuccin/palette';

function clean(input) {
    return input.replaceAll('\n', '').replaceAll(' ', ''.replaceAll('\t', ''));
}

export function load({ params }) {
	console.log("loading")
    console.log(browser)
    if (browser) {
		let injection = clean(`
            body {
                background-color: ${variants.macchiato.base.hex};
            }
            * {
                color: ${variants.macchiato.text.hex};
            }
            input {
                background-color: ${variants.macchiato.mantle.hex};
                border-radius: 25px;
                padding: 5px;
                border-color: transparent;
            }
            .text-catppuccin-pink {
                color: ${variants.macchiato.pink.hex};
            }
            button {
                border-radius: 25px;
                padding: 5px;
                cursor: pointer;
                border-color: transparent;
                margin-left: -20px;
                background-color: ${variants.macchiato.crust.hex}
            }
            `);
		let style = document.getElementsByTagName('style').item(0);
		if (!clean(style.innerText).includes(injection)) style.innerText += injection;
	}
}
