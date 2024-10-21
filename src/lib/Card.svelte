<script lang="ts">
  export let href: string | null = null;
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
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
  {#if $$slots["header-media"]}
    <div class="header-media">
      <slot name="header-media"></slot>
    </div>
  {/if}
  {#if typeof href == "undefined"}
    <div class="title">
      <slot name="title"></slot>
    </div>
  {:else}
    <a {href} class="title">
      <slot name="title"></slot>
    </a>
  {/if}
  <div class="description">
    <slot name="description"></slot>
  </div>
  {#if $$slots["additional-links"]}
    <div class="additional-links">
      <slot name="additional-links"></slot>
    </div>
  {/if}
</div>
