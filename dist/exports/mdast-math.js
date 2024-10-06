import InlineMath from '../components/InlineMath.svelte';
import Math from '../components/Math.svelte';
import { mathFromMarkdown } from 'mdast-util-math';
import { math } from 'micromark-extension-math';
export const components = {
    inlineMath: InlineMath,
    math: Math
};
export const extensions = [math()];
export const mdastExtensions = [mathFromMarkdown()];
