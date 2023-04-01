<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	var apiUrl = '';
	let error;
	onMount(async () => {
		if (browser) {
			let localStorage = window.localStorage.getItem('opentodoServer');
			if (localStorage == null) {
				window.location.href = '/';
			}
			apiUrl = localStorage;
		}
		let x = fetch(apiUrl + "/")
		if (x != "Hello World!") {
			error.innerText = "FATAL ERROR: API DID NOT RESPOND WITH BASE RESPONSE"
		}
	});
</script>
<p bind:this={error}></p>
<!-- list projects or something here -->
