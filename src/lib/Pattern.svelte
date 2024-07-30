<script lang="ts">
	import { onMount } from "svelte";
  import trianglify from "trianglify";

  export let width: number = 1000;
  export let height: number = 1000;
  export let cellSize: number = 100;
  export let seed: string = "example-seed";

  let patternCanvas: HTMLCanvasElement

  function generatePattern() {
    const pattern = trianglify({ width, height, cellSize, seed, });
    pattern.toCanvas(patternCanvas);
  }

  onMount(generatePattern);
</script>

<style>
  canvas {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<canvas bind:this={patternCanvas} />
