<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import PageTransition from '../components/Transition.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import '../app.css';

	export let data;

	import CopyButton from '../components/CopyButton.svelte';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		for (const node of document.querySelectorAll('pre > code')) {
			new CopyButton({
				target: node,
				props: {
					content: node.textContent ?? ''
					// requires <pre> to have position: relative;
				}
			});
		}
	});
</script>

<div class="layout">
	<Header />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
