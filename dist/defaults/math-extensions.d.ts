import { math } from 'micromark-extension-math';
declare module '@accuser/svelte-mdast' {
    interface ExtensionMap {
        math: ReturnType<typeof math>;
    }
}
declare const _default: {
    math: import("micromark-util-types").Extension;
};
export default _default;
