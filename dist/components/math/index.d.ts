declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        math: import('mdast-util-math').Math;
    }
}
export { default as Math } from './math.svelte';
