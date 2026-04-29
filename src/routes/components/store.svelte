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
				<p class="colors">3 <span class="remove">colors</span></p>
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
				<p class="colors">3 <span class="remove">colors</span></p>
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
				<p class="colors">3 <span class="remove">colors</span></p>

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
			width: 100%;
			max-width: 700px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 24px;
			overflow: visible;
		}
	}

	.items .item {
		box-shadow: 0px 5px 10px 2px rgba(168, 67, 250, 0.1);
		background-color: white;
		border-radius: 12px;
		padding: 12px;
		cursor: pointer;
		transition: all 0.4s ease;

		@media (hover: hover) {
			&:hover {
				box-shadow: 0px 5px 10px 2px rgba(168, 67, 250, 0.2);
				.options p.name {
					text-decoration: underline;
					text-decoration-color: g.$color-tint7;
				}
			}
		}


		.options {
			display: grid;
			grid-template-columns: 65% 35%;
			align-items: center;

			p.name {
				font-family: g.$font-family_text;
				color: g.$color-shade6;
				font-size: 1.25rem;
				white-space: nowrap;

				mask-image: linear-gradient(to right, black 70%, transparent 100%);
				-webkit-mask-image: linear-gradient(to right, black 70%, transparent 100%);
			}
			p.colors {
				font-family: g.$font-family_text;
				color: g.$color-shade6;
				font-size: 1rem;
				white-space: nowrap;
				width: min-content;
			}
		}
		.price {
			p {
				font-family: g.$font-family_text;
				color: rgba(g.$color-shade4, 0.5);
				font-size: 1rem;
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

	@media (max-width: 48em) { // extra small screens 480 px
		.app .items {
			padding: 0 12px;
			gap: 12px;
		}
		.items .item .options {
			grid-template-columns: 1fr 12px;
			gap: 8px;
		}
		p.colors {
			text-align: end;
			.remove { display: none; }
		}
	}

</style>
