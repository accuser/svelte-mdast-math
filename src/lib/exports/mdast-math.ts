import InlineMath from '$lib/components/InlineMath.svelte';
import Math from '$lib/components/Math.svelte';
import type { Components } from '@accuser/svelte-unist';
import { mathFromMarkdown } from 'mdast-util-math';
import { math } from 'micromark-extension-math';

declare module '@accuser/svelte-unist' {
	export interface ComponentMap {
		inlineMath: import('mdast-util-math').InlineMath;
		math: import('mdast-util-math').Math;
	}
}

export const components: Components = {
	inlineMath: InlineMath,
	math: Math
};

export const extensions: import('micromark-util-types').Extension[] = [math()];

export const mdastExtensions: (
	| import('mdast-util-from-markdown').Extension
	| import('mdast-util-from-markdown').Extension[]
)[] = [mathFromMarkdown()];
