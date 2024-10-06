import type { Extensions } from '@accuser/svelte-mdast';
import { math } from 'micromark-extension-math';

declare module '@accuser/svelte-mdast' {
	export interface ExtensionMap {
		math: ReturnType<typeof math>;
	}
}

export default { math: math() } satisfies Extensions;
