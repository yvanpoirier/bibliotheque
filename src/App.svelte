<script lang="ts">
	import MenuRetractable from "./components/MenuRetractable.svelte";
	import MenuDecrease from "./components/MenuDecrease.svelte";
	import Parallax from "./components/Parallax.svelte";
	export let name: string;
</script>

<Parallax />
<!-- <main>
	<MenuDecrease />
	<div class="content">
		<h1>Hello {name}!</h1>
		<p>Bibliothèque de composants svelte</p>	
	</div>
</main> -->

<style lang="scss">
	
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background-color: $color_primary;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.content {
		width: 100%;
		height: 200vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin: $header_height 0 0 0;
	}

</style>