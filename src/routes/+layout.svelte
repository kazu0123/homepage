<script lang="ts">
	import Icon from '@iconify/svelte';
	import '../app.css';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	function toggleDarkMode() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<svelte:head>
	<script>
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<AppBar classes="fixed top-0 inset-x-0 z-40">
	{#snippet lead()}
		小久保和喜
	{/snippet}

	{#snippet trail()}
		<button
			aria-label="ダークモード切り替え"
			onclick={toggleDarkMode}
			class="flex items-center justify-center"
		>
			<Icon icon="line-md:light-dark" />
		</button>

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
