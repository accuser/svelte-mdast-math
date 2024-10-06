declare module '@accuser/svelte-unist' {
    interface ComponentMap {
        inlineMath: import('mdast-util-math').InlineMath;
        math: import('mdast-util-math').Math;
    }
}
declare const _default: {
    inlineMath: import("svelte").Component<import("mdast-util-math").InlineMath, {}, "">;
    math: import("svelte").Component<import("mdast-util-math").Math, {}, "">;
};
export default _default;
