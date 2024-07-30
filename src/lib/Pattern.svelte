<script lang="ts">
	import { onMount } from "svelte";
  import trianglify from "trianglify";

  export let width = 1000;
  export let height = 1000;
  export let cellSize = 100;
  export let seed = "example-seed";

  let patternCanvas: HTMLCanvasElement

  function generatePattern() {
    const pattern = trianglify({ width, height, cellSize, seed, });
    pattern.toCanvas(patternCanvas);
  }

  onMount(generatePattern);
</script>

<canvas bind:this={patternCanvas} />
