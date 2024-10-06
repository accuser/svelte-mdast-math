import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Math from './Math.svelte';
describe('Math.svelte', async () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            type: 'math',
            value: 'C'
        }
    });
    it('renders <span>', async ({ props }) => {
        mount(Math, { props, target: document.body });
        expect(document.body.querySelector('span')).toBeInTheDocument();
    });
    it('renders <span> with `katex` class', async ({ props }) => {
        mount(Math, { props, target: document.body });
        expect(document.body.querySelector('span.katex')).toBeInTheDocument();
    });
    it('renders <span> with content', async ({ props }) => {
        mount(Math, { props, target: document.body });
        expect(document.body.querySelector('span.katex')).toHaveTextContent('C');
    });
});
