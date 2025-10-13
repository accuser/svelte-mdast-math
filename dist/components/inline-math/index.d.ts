declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        inlineMath: import('mdast-util-math').InlineMath;
    }
}
export { default as InlineMath } from './inline-math.svelte';
