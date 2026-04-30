<script lang="ts">
	import ImgLabubu from "$lib/assets/labubu.png"

	import InfoBar from "./components/info-bar.svelte"
	import Store from "./components/store.svelte"
	import Cart from "./components/cart.svelte"

	const { data } = $props();

</script>


<div class="app">

	<div class="header">
		<div class="text">
			<p class="t1">Charming</p>
			<p class="t2">Creations</p>
		</div>
		<img src={ImgLabubu} alt="">
	</div>
	<!-- <div class="subheader"> -->
	<!-- 	<p>Personalized gifts, souvenirs, holiday decor and more!</p> -->
	<!-- </div> -->

	<div class="content">
		<InfoBar></InfoBar>
		<Cart></Cart>
		<Store items={data.items}></Store>
	</div>


</div>


<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@1979&family=Croissant+One&family=Sniglet:wght@400;800&display=swap');

	@media (min-width: 100em) { // laptops or big tablets, normal 1000px

	}

	.app {
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		width: 100%;
		padding-top: 64px;
	}

	

	.header {
		width: 100%;
		padding-top: 100px;

		display: flex;
		align-items: center;
		justify-content: center;

		position: relative;

		img {
			position: absolute;
			z-index: 0;
			width: 140px;
		}

		p {
			z-index: 1;
			font-family: "Climate Crisis", sans-serif;
			color: #b156fb;
			font-size: 2.5rem;
		}

		.text {
			display: flex;
			flex-direction: column;
			gap: 52px;

			.t1 {
				width: 700px;
				text-align: left;
			}
			.t2 {
				width: 700px;
				text-align: right;
			}
		}
	}

	@media (max-width: 48em) { // extra small screens 480 px
		.header .text {
			width: 100%;
			padding: 0 32px;

			.t1, .t2 {
				width: 100%;
			}
		}
	}

</style>
