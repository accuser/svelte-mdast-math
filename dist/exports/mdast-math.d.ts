import type { Components } from '@accuser/svelte-unist';
declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        inlineMath: import('mdast-util-math').InlineMath;
        math: import('mdast-util-math').Math;
    }
}
export declare const components: Components;
export declare const extensions: import('micromark-util-types').Extension[];
export declare const mdastExtensions: (import('mdast-util-from-markdown').Extension | import('mdast-util-from-markdown').Extension[])[];
