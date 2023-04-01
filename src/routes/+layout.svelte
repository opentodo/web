<script>
	import { variants, labels } from '@catppuccin/palette';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let style;

	

	onMount(async () => {
	});
</script>

<style bind:this={style}>
</style>

<slot default></slot>