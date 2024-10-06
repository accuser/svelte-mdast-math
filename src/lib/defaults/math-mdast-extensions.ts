import type { MdastExtensions } from '@accuser/svelte-mdast';
import { mathFromMarkdown } from 'mdast-util-math';

declare module '@accuser/svelte-mdast' {
	export interface MdastExtensionMap {
		mathFromMarkdown: ReturnType<typeof mathFromMarkdown>;
	}
}

export default {
	mathFromMarkdown: mathFromMarkdown()
} satisfies MdastExtensions;
