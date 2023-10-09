<script>
	import Icon from '@iconify/svelte';

	export let content = ``;
	export let as = `button`;

	const labels = {
		default: 'octicon:copy-16',
		success: 'octicon:check-16',
		error: 'octicon:alert-16'
	};

	let state = labels.default;

	async function copy() {
		try {
			await navigator.clipboard.writeText(content);
			state = labels.success;
		} catch (err) {
			console.error(err);
			state = labels.error;
		}
		setTimeout(() => (state = labels.default), 2000);
	}
</script>

<svelte:element
	this={as}
	class:success={state === labels.success}
	on:click={copy}
	role="button"
	tabindex={0}
>
	<slot>
		<Icon icon={state} />
	</slot>
</svelte:element>

<style>
	button {
		position: absolute;
		top: 6px;
		right: 6px;
		font-size: var(--font-size-fluid-0);
		color: var(--text-2);
		background: var(--surface-2);
		box-shadow: var(--shadow-5);
		border: 3px solid transparent;
		border-radius: 6px;
		padding: 8px;

		transition: 300ms cubic-bezier(0.33, 1, 0.68, 1);
		transition-property: color, background-color, border-color, box-shadow;

		&.success {
			color: var(--green-8);
			border-color: var(--green-8);
			background-color: transparent;
			box-shadow: none;
		}
	}
</style>
