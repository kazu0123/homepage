<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href?: string;

		thumbnail?: Snippet;
		title: Snippet;
		description: Snippet;
		additionalLinks?: Snippet;
	};

	const {
		href,

		thumbnail,
		title,
		description,
		additionalLinks
	}: Props = $props();
</script>

<div class="card">
	{#if typeof thumbnail !== 'undefined'}
		<div class="thumbnail">
			{@render thumbnail()}
		</div>
	{/if}
	{#if typeof href == 'undefined'}
		<div class="title">
			{@render title()}
		</div>
	{:else}
		<a {href} class="title">
			{@render title()}
		</a>
	{/if}
	<div class="description">
		{@render description()}
	</div>
	{#if typeof additionalLinks !== 'undefined'}
		<div class="additional-links">
			{@render additionalLinks()}
		</div>
	{/if}
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		border: 1px solid #ddd;
		border-radius: 1rem;
		box-sizing: border-box;

		width: 100%;
		height: 100%;

		position: relative;

		> a {
			text-decoration: none;
			color: inherit;

			// カード全体でクリックできるようにする
			&:before {
				content: '';
				position: absolute;
				inset: 0;
				cursor: pointer;
			}
		}

		.thumbnail, .title, .description,.additional-links {
			overflow: hidden;
		}

		padding-bottom: 1rem;
		.title, .description,.additional-links {
			padding: 0 1rem;
		}

		.thumbnail {
			height: 50%;
			
			border-radius: 1rem;
		}

		.title {
			height: 10%;

			display: flex;
			align-items: center;
		}
		.description {
			flex-grow: 1;
		}

		.additional-links {
			height: 2rem;

			display: flex;
			flex-direction: row;
			white-space: nowrap;
			overflow-x: hidden;
			align-items: center;
			gap: 0.5rem;

			position: relative;
		}
	}
</style>
