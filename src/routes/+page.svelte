<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let defaultUrl = 'https://todo-api.ecorous.org'; // undecided on the subdomain
	let h1;
	let input;
	let errorOut;
	let button;
	function clearError() {
		errorOut.innerHTML = "";
	}
	onMount(async () => {
		h1.classList.add("text-catppuccin-pink")
		errorOut.classList.add("text-catppuccin-pink")
		if (browser) {
			let localStorage = window.localStorage.getItem('opentodoServer');
			if (localStorage != null) {
				window.location.href = '/home/';
			}
		}
		button = function() {
			console.log(input)
			let i = input.innerText
			if (!i.startsWith("http://") && !i.startsWith("https://")) {
				errorOut.innerHTML = "Error: invalid protocol. Supported protocols: <code>http://</code>, <code>https://</code>"
			}
			setTimeout(clearError, 3750)
		}
	});

	/*function button() {
		
	}*/
</script>

<h1 bind:this={h1}>No valid API URL set. Please enter an API URL below, and press submit</h1>
<!-- Insert picking an apiUrl thing here at some point -->
<div style="display: flex;">
<input bind:this={input}>
<button type="submit" on:click={button()}>Submit</button>
</div>
<!-- svelte-ignore a11y-missing-content -->
<h2 bind:this={errorOut}></h2>