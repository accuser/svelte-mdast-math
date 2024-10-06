<script lang="ts">
	import { mathComponents, mathExtensions, mathMdastExtensions } from '$lib/index.js';
	import { Mdast } from '@accuser/svelte-mdast';
	import { fromMarkdown } from 'mdast-util-from-markdown';

	let src = '$y=mx+c$';

	const extensions = Object.values({ ...mathExtensions });
	const mdastExtensions = Object.values({ ...mathMdastExtensions });

	let ast = $derived.by(() => fromMarkdown(src, { extensions, mdastExtensions }));
</script>

<Mdast {ast} components={mathComponents} />
