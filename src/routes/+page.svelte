<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let defaultUrl = 'https://todo-api.ecorous.org'; // undecided on the subdomain

	onMount(async () => {
		if (browser) {
			let localStorage = window.localStorage.getItem('opentodoServer');
			if (localStorage != null) {
				window.location.href = '/home/';
			}
		}
	});
</script>

<!-- Insert picking an apiUrl thing here at some point -->
