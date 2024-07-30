<script lang="ts">
	import Card from "$lib/Card.svelte";

    import { isResolvedAssetWithFile } from "$lib/isResolvedAssetWithFile";
	import { isResolvedTechnologyEntry } from "$lib/Technology";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<style lang="scss">
    section {
        display: grid;
        height: 90vh;
        scroll-margin-top: 4rem;
    }
    .project-cards {
        display: flex;
        list-style: none;
    }
    .project-cards > li {
        height: 50vh;
        width: 30vh;
        margin-left: 5px;
        :last-child {
            margin-left: 0;
        }
    }
    .header-media-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<section id="top">
    <h1>小久保和喜</h1>
</section>

<section id="about-me">
    <h2>自己紹介</h2>
</section>

<section id="projects">
    <h2>作品</h2>
    <ul class="project-cards">
        {#each data.projects.items as project}
        <li>
            <Card href={project.fields.link}>
                <svelte:fragment slot="header-media">
                    {#if (
                        project.fields.image != undefined &&
                        isResolvedAssetWithFile(project.fields.image)
                    )}
                        <img
                            src={project.fields.image.fields.file.url}
                            alt={project.fields.description}
                            class="header-media-content"
                        >
                    {/if}
                </svelte:fragment>
                <svelte:fragment slot="title">
                    <h3>{project.fields.title}</h3>
                </svelte:fragment>
                <svelte:fragment slot="description">
                    <p>{project.fields.description}</p>
                </svelte:fragment>
                <svelte:fragment slot="additional-links">
                    {#if typeof project.fields.technologies != "undefined" && isResolvedTechnologyEntry(project.fields.technologies)}
                        <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript">
                            {project.fields.technologies.fields.name}
                        </a>
                    {/if}
                </svelte:fragment>
            </Card>
        </li>
        {/each}
    </ul>
</section>

<section id="skills">
    <h2>スキル</h2>
</section>

<section id="contact">
    <h2>連絡先</h2>
</section>
