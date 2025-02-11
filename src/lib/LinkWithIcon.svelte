<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		href?: string;
		text: string;
		icon?: string;
	}

	const { href, text, icon }: Props = $props();
</script>

<span>
	{#if icon}
		<Icon {icon} />
	{/if}
	{#if href}
		<a {href}>{text}</a>
	{:else}
		{text}
	{/if}
</span>

<style>
	span {
		display: inline-block;

		height: 2em;
		padding: 0 1em;

		border-radius: calc(infinity * 1px);
		border: 1px solid rgb(var(--base-font-color));
		box-sizing: border-box;

		line-height: 2em;
	}
	:root.dark span {
		border: 1px solid rgb(var(--base-font-color-dark));
	}
</style>
