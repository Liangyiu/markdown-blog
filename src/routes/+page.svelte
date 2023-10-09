<script lang="ts">
	import * as config from '$lib/config.js';
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
		padding: var(--size-4);
		box-shadow: var(--shadow-3);
		border-radius: var(--radius-3);
		background: var(--surface-3);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
