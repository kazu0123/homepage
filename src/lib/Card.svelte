<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href?: string;

		thumbnail?: Snippet;
		title: Snippet;
		description: Snippet;
		additionalLinks?: Snippet;
	};

	const { href, thumbnail, title, description, additionalLinks }: Props = $props();

	let additionalLinkElement: HTMLElement | undefined = $state();
	let scrollInterval: number | null = null;

	let currentIndex: number = 0;

	function startScrolling() {
		if (scrollInterval !== null) return;
		if (typeof additionalLinkElement === 'undefined') return;

		scrollInterval = setInterval(() => {
			if (!additionalLinkElement) return;

			const nextIndex = (currentIndex + 1) % additionalLinkElement.children.length;

			const currentElement = additionalLinkElement.children[currentIndex];
			const nextElement = additionalLinkElement.children[nextIndex];
			const currentElementRect = currentElement.getBoundingClientRect();
			const nextElementRect = nextElement.getBoundingClientRect();

			const scrollAmountLeft = nextElementRect.left - currentElementRect.left;

			additionalLinkElement.scrollBy({ left: scrollAmountLeft, behavior: 'smooth' });

			currentIndex = nextIndex;
		}, 1000);
	}

	function stopScrolling() {
		if (scrollInterval !== null) {
			clearInterval(scrollInterval);
			scrollInterval = null;
		}
		if (additionalLinkElement) {
			additionalLinkElement.scrollBy({
				left: additionalLinkElement.scrollLeft * -1,
				behavior: 'smooth'
			});
		}
	}
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
		<div
			class="additional-links"
			role="list"
			bind:this={additionalLinkElement}
			onmouseenter={startScrolling}
			onmouseleave={stopScrolling}
		>
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

		.thumbnail,
		.title,
		.description,
		.additional-links {
			overflow: hidden;
		}

		padding-bottom: 1rem;
		.title,
		.description,
		.additional-links {
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
			padding-left: 1rem;
		}
	}
</style>
