<script>
	import { variants, labels } from '@catppuccin/palette';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	function clean(input) {
		return input.replaceAll('\n', '').replaceAll(' ', ''.replaceAll('\t', ''));
	}

	onMount(async () => {
		if (browser) {
			let injection = clean(`
                body {
                    background-color: ${variants.macchiato.base.hex};
                }
                * {
                    color: ${variants.macchiato.text.hex};
                }
                `);
			let style = document.getElementsByTagName('style').item(0);
			if (!clean(style.innerText).includes(injection)) style.innerText += injection;
		}
	});
</script>

<style>
	.this-is-required-for-funny-injection-to-work {
	}
</style>

<slot default></slot>