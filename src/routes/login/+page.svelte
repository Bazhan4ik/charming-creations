<script lang="ts">
	const { data } = $props();
</script>

<div class="app">
	<div class="form">
		<div class="header">
			<h1>Login</h1>
		</div>
		<form class="form-body" method="POST">
			<input type="text" name="username">
			<input type="password" name="password">
			<button type="submit">Submit</button>
		</form>
	</div>
</div>

