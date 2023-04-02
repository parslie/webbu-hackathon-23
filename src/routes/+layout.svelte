<script>
	import { base } from '$app/paths';
</script>

<div>
	<header>
		<h1>Viktor Holta</h1>
		<nav>
			<a href="{base}/about">About</a>
			<a href="{base}/projects">Projects</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<h4>Viktor Holta <b>©</b> 2023</h4>
	</footer>
</div>

<style lang="scss">
	@import '../variables.scss';
	@import '../default.scss';

	div {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: 70rem;
		min-height: 100vh;
		color: $black;
	}

	header {
		display: flex;
		flex-direction: row;
		gap: $medium-size;
		padding: $medium-size;

		h1 {
			margin: 0;
		}

		nav {
			flex-grow: 1;

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: $small-size;

			a {
				align-self: center;

				border: 3px solid $black;
				padding: $small-size $medium-size;
				border-radius: $medium-size;
				color: $black !important;
				font-weight: 600;
				text-decoration: none;
				transition: all 50ms ease-out;

				&:hover {
					border-color: transparent;
					background: $black;
					color:  $green !important;
				}
			}
		}
	}

	main {
		padding: 0 $medium-size;
		flex-grow: 1;
	}

	footer {
		padding: $medium-size;
	}
</style>
