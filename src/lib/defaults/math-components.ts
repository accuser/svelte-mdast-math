import InlineMath from '$lib/components/InlineMath.svelte';
import Math from '$lib/components/Math.svelte';
import type { Components } from '@accuser/svelte-unist';

declare module '@accuser/svelte-unist' {
	export interface ComponentMap {
		inlineMath: import('mdast-util-math').InlineMath;
		math: import('mdast-util-math').Math;
	}
}

export default {
	inlineMath: InlineMath,
	math: Math
} satisfies Components<import('mdast-util-math').InlineMath | import('mdast-util-math').Math>;
