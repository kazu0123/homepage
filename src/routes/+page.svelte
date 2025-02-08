<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Pattern from '$lib/Pattern.svelte';

	import { isResolvedAssetWithFile } from '$lib/isResolvedAssetWithFile';
	import { isResolvedTechnologyEntry } from '$lib/Technology';
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<section id="top">
	<h1 class="section-title">
		<span>小久保</span>
		<span>和喜</span>
	</h1>
</section>

<section id="about-me">
	<h2 class="section-title">自己紹介</h2>
</section>

<section id="projects">
	<div>
		<h2 class="section-title">作品</h2>
	</div>
	<ul class="project-cards">
		{#each data.projects.items as project}
			<li>
				<Card href={project.fields.link}>
					{#snippet thumbnail()}
						{#if project.fields.image != undefined && isResolvedAssetWithFile(project.fields.image)}
							<img
								src={project.fields.image.fields.file.url}
								alt={project.fields.description}
								class="header-media-content"
							/>
						{:else}
							<Pattern />
						{/if}
					{/snippet}
					{#snippet title()}
						<h3>{project.fields.title}</h3>
					{/snippet}
					{#snippet description()}
						<p>{project.fields.description}</p>
					{/snippet}
					{#snippet additionalLinks()}
						{#if typeof project.fields.technologies != 'undefined'}
							{#each project.fields.technologies as technology}
								{#if isResolvedTechnologyEntry(technology)}
									{#if typeof technology.fields.link == 'undefined'}
										{technology.fields.name}
									{:else}
										<a href={technology.fields.link}>
											{technology.fields.name}
										</a>
									{/if}
								{/if}
							{/each}
						{/if}
					{/snippet}
				</Card>
			</li>
		{/each}
	</ul>
</section>

<section id="skills">
	<h2 class="section-title">スキル</h2>
</section>

<section id="contact">
	<h2 class="section-title">連絡先</h2>
	<ul>
		<li>
			<p>メール：<a href="mailto:web-contact@kokubokazuki.com">web-contact@kokubokazuki.com</a></p>
		</li>
	</ul>
</section>

<style lang="scss">
	section {
		display: grid;
		height: 90vh;
		scroll-margin-top: 4rem;
		padding-left: 3rem;

		.section-title {
			font-size: 3rem;

			> span {
				display: inline-block;
			}
		}
	}

	section#top {
		align-items: center;
		background-color: lightgray;

		.section-title {
			font-size: 5rem;
		}
	}

	section#about-me {
		height: 50vh;
		background-color: azure;
	}

	section#projects {
		height: 60vh;

		div {
			display: grid;
			height: 10vh;
			h2 {
				margin: 0;
				align-self: center;
			}
		}
		.project-cards {
			margin: 0;
			padding: 0;
			display: flex;
			list-style: none;
			overflow-x: scroll;

			-ms-overflow-style: none;
			scrollbar-width: none;

			::-webkit-scrollbar {
				display: none;
			}
		}
		.project-cards > li {
			height: 50vh;
			min-width: 30vh;
			margin-right: 5px;
			flex-basis: 0;

			&:last-child {
				margin-right: 0;
			}
		}
	}
	.header-media-content {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	section#skills {
		height: 40vh;
	}

	section#contact {
		align-content: center;
		justify-content: left;
		height: 30vh;
	}
</style>
