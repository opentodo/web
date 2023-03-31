<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	var apiUrl = '';

	onMount(async () => {
		if (browser) {
			let localStorage = window.localStorage.getItem('opentodoServer');
			if (localStorage == null) {
				window.location.href = '/';
			}
			apiUrl = localStorage;
		}
	});
</script>

<!-- list projects or something here -->
