<script lang="ts">
	import katex from 'katex';

	let { node }: { node: import('mdast-util-math').Math } = $props();

	let { value } = $derived(node);

	let mathml = $derived(
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: true
		})
	);
</script>

{@html mathml}
