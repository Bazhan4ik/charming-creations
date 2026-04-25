<script lang="ts">
	import ImgLabubu from "$lib/assets/labubu.png"

	import InfoBar from "./components/info-bar.svelte"
	import Store from "./components/store.svelte"
	import Cart from "./components/cart.svelte"

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
		<Store></Store>
	</div>


</div>


<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@1979&family=Croissant+One&family=Sniglet:wght@400;800&display=swap');

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		width: 100vw;
		padding-top: 64px;
		
		// background: #FFF;
		// background: linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(246, 236, 255, 1) 20%, rgba(246, 236, 255, 1) 80%, rgba(255, 255, 255, 1) 100%);
	}

	.header {
		width: 100vw;
		padding-top: 100px;
		//background-color: #a843fa;
		//background-color: #b156fb;

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
			//color: #f6ecff;
			//color: #eed9fe;
			color: #b156fb;
			font-size: 40px;
			//letter-spacing: 2px;
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

</style>
