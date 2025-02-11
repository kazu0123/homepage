<script lang="ts">
	import '../app.css';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<AppBar classes="fixed top-0 inset-x-0 z-40">
	{#snippet lead()}
		小久保和喜
	{/snippet}

	{#snippet trail()}
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/#about-me">About Me</a></li>
				<li><a href="/#projects">Projects</a></li>
				<li><a href="/#skills">Skills</a></li>
				<li><a href="/#contact">Contact</a></li>
			</ul>
		</nav>
	{/snippet}
</AppBar>

<main>
	{@render children?.()}
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
	}

	nav ul {
		display: flex;
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	nav ul li {
		margin-right: 1rem;
	}

	nav ul li:last-child {
		margin-right: 0;
	}

	nav a {
		text-decoration: none;
		transition: color 0.3s;
	}

	nav a:hover {
		color: #007bff;
	}
</style>
