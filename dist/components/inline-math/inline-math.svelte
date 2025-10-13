<script lang="ts">
	import katex from 'katex';

	let { node }: { node: import('mdast-util-math').InlineMath } = $props();

	let { value } = $derived(node);

	let mathml = $derived(
		katex.renderToString(value, {
			throwOnError: false
		})
	);
</script>

{@html mathml}
