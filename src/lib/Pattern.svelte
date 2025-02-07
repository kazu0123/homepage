<script lang="ts">
	import { onMount } from "svelte";
  import trianglify from "trianglify";

  interface Props {
    width?: number;
    height?: number;
    cellSize?: number;
    seed?: string;
  }

  let {
    width = 1000,
    height = 1000,
    cellSize = 100,
    seed = "example-seed"
  }: Props = $props();

  let patternCanvas: HTMLCanvasElement = $state()

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

<canvas bind:this={patternCanvas}></canvas>
