<script lang="ts">
	import Img_Item1 from "$lib/assets/item1_pink.png";
	import Img_Item2 from "$lib/assets/item2_pink.png";
	import Img_Item3 from "$lib/assets/item3_pink.png";

</script>

<div class="app">
	<div class="items">
		<div class="item">
			<div class="item-image">
				<img src={Img_Item1} alt="">
			</div>
			<div class="options">
				<p class="name">Bag</p>
				<p class="colors">3 colors</p>
			</div>
			<div class="price">
				<p>60.99$</p>
			</div>
		</div>

		<div class="item">
			<div class="item-image">
				<img src={Img_Item2} alt="">
			</div>
			<div class="options">
				<p class="name">Cool looking hat</p>
				<p class="colors">3 colors</p>
			</div>
			<div class="price">
				<p>60.99$</p>
			</div>
		</div>

		<div class="item">
			<div class="item-image">
				<img src={Img_Item3} alt="">
			</div>
			<div class="options">
				<p class="name">Labubu</p>
				<p class="colors">3 colors</p>
			</div>
			<div class="price">
				<p>10.99$</p>
			</div>
		</div>
	</div>
</div>


<style lang="scss">
	@use "./../../global.scss" as g;

	.app {
		width: 100vw;
		background-color: g.$color-tint9; 
		display: flex;
		justify-content: center;

		padding-bottom: 200px;
		
		.items {
			width: 700px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 24px;
		}
	}

	.items .item {
		box-shadow: 0px 5px 10px 2px rgba(168, 67, 250, 0.1);
		background-color: white;
		border-radius: 12px;
		padding: 12px;
		cursor: pointer;
		transition: all 0.4s ease;

		&:hover {
			scale: 1.01;
			box-shadow: 0px 5px 10px 2px rgba(168, 67, 250, 0.2);
			.options p.name {
				text-decoration: underline;
				text-decoration-color: g.$color-tint7;
			}
		}

		.options {
			display: flex;
			justify-content: space-between;
			align-items: center;

			p.name {
				font-family: g.$font-family_text;
				color: g.$color-shade6;
				font-size: 20px;
			}
			p.colors {
				font-family: g.$font-family_text;
				color: g.$color-shade6;
				font-size: 16px;
			}
		}
		.price {
			p {
				font-family: g.$font-family_text;
				color: rgba(g.$color-shade4, 0.5);
				font-size: 16px;
			}
		}

		.item-image {
			width: 100%;
			display: flex;
			justify-content: center;
			padding-top: 12px;

			img {
				width: 60%;
				border-top-left-radius: 12px;
				border-top-right-radius: 12px;
			}

		}

	}
</style>
