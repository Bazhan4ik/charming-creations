<div class="app">
	<div class="content">
		<div class="subtitle-text">
			Personalized Gifts, Home & Holiday Decor and Much More
		</div>
		<div class="business-info">
			<div class="card location">
				<div class="icon">
					<span class="material-symbols-rounded">location_on</span>
				</div>
				<div class="text">St. Thomas, ON</div>
			</div>
			<div class="card delivery">
				<div class="icon">
					<span class="material-symbols-rounded">package_2</span>
				</div>
				<div class="text">Delivery within Canada</div>
			</div>
			<div class="card order-online">
				<div class="icon">
					<span class="material-symbols-rounded">credit_card</span>
				</div>
				<div class="text">Order online</div>
			</div>
		</div>
	</div>
</div>


<style lang="scss">
	@use "./../../global.scss" as g;

	.app {
		width: 100vw;
		padding-top: 112px;
		background: #F6ECFF;
		background: linear-gradient(0deg,rgba(246, 236, 255, 1) 70%, rgba(255, 255, 255, 1) 100%);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content {
		width: 700px;
	}

	.subtitle-text {
		font-family: "Croissant One", serif;
		font-size: 24px;
		color: g.$color-shade2;
		font-weight: 400;
	}

	.business-info {
		display: flex;
		justify-content: space-between;
		margin-top: 24px;
	}

	.business-info .card {
		display: flex;
		align-items: center;
		gap: 5px;

		.icon span {
			font-size: 26px;
			color: g.$color-tint3;
		}
		.text {
			font-family: "Sniglet", system-ui;
			font-size: 16px;
			color: g.$color-tint4;
			font-weight: 400;
		}
	}

</style>
