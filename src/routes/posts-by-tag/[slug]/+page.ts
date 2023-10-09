import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const response = await fetch(`../api/posts-by-tag/${params.slug}`);
	const posts: Post[] = await response.json();

	return { posts };
}) satisfies PageLoad;
