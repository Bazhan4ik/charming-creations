
<div class="app">

	<div class="card">
		<div class="icon">
			<span class="material-symbols-rounded">shopping_cart</span>
		</div>

		<div class="border"></div>

		<div class="items">

			<p class="no-items">
				No items yet...
			</p>

		</div>

		<div class="checkout">
			<button>Checkout <span class="material-symbols-rounded">arrow_right</span></button>
		</div>
		

	</div>

</div>

<style lang="scss">
	@use "./../../global.scss" as g;
	.app {
		width: 100vw;
		display: flex;
		justify-content: center;
		background-color: g.$color-tint9;
		padding: 24px 0;
	}
	.card {
		background-color: white;
		width: 700px;
		height: 64px;
		border-radius: 12px;
		box-shadow: 0px 5px 10px 2px rgba(168, 67, 250, 0.1);
		display: flex;
		align-items: center;
	}

	.items {
		p.no-items {
			margin-left: 12px;
			font-family: g.$font-family_text;
			color: rgba(g.$color-shade4, 0.5);
		}

	}

	.border {
		height: 28px;
		width: 3px;
		background-color: g.$color-shade4;
	}

	.checkout {
		margin-left: auto;
		margin-right: 24px;

		button {
			border: 2px solid g.$color-shade2;
			border-radius: 8px;
			padding: 6px 12px;
			max-height: 36px;
			font-family: "Sniglet", system-ui;
			font-size: 16px;
			background: none;
			display: flex;
			align-items: center;
			gap: 0px;
			color: g.$color-shade2;
			cursor: pointer;
			transition: all 0.2s ease;


			@media (hover: hover) {
				&:hover {
					background-color: rgba(g.$color-tint9, 0.5);
					border: 2px solid g.$color-shade3;
					color: g.$color-shade3;
				}
			}
			

			span {
				font-size: 28px;
			}
		}
	}

	.icon {
		width: 64px;
		height: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 3px;

		span {
			font-size: 30px;
			color: g.$color-shade4;
		}
	}
</style>
