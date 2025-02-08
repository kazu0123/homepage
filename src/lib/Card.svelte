<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    href?: string,

		thumbnail?: Snippet,
    title: Snippet,
    description: Snippet,
    additionalLinks?: Snippet,
	}

	const { 
    href, 

    thumbnail, 
    title, 
    description, 
    additionalLinks,
  }: Props = $props();
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
  }
  .card > * { 
    overflow: hidden;
  }
  .header-media {
    overflow: hidden;
    flex-basis: 40%;
    flex-grow: 0;
  }
  .header-media:empty {
    display: none;
  }
  .title {
    flex-basis: 10%;
    flex-grow: 0;
  }
  .description {
    flex-basis: 40%;
    flex-grow: 1;
    overflow-y: auto;
  }
  .additional-links {
    flex-basis: 10%;
    flex-grow: 0;
  }
  .additional-links:empty {
    display: none;
  }

  /* カード全体をクリッカブルにする */
  .card, .additional-links {
    position: relative;
  }
  .card > a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .card > a:before {
    content: "";
    position: absolute;
    inset: 0;
  }
</style>

<div class="card">
  {#if typeof thumbnail !== "undefined"}
    <div class="header-media">
      {@render thumbnail()}
    </div>
  {/if}
  {#if typeof href == "undefined"}
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
  {#if typeof additionalLinks!==  "undefined"}
    <div class="additional-links">
      {@render additionalLinks()}
    </div>
  {/if}
</div>
