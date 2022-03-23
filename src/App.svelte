<script lang="ts">
	import RetractableMenu from "./components/RetractableMenu.svelte";
	export let name: string;
</script>

<main>
	<RetractableMenu />
	<div class="content">
		<h1>Hello {name}!</h1>
		<p>Bibliothèque de composants svelte</p>	
	</div>
</main>

<style lang="scss">
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
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
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>