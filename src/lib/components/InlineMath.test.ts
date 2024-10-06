import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import InlineMath from './InlineMath.svelte';

describe('InlineMath.svelte', async () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof InlineMath> }>({
		props: {
			type: 'inlineMath',
			value: 'C'
		}
	});

	it('renders <span>', async ({ props }) => {
		mount(InlineMath, { props, target: document.body });

		expect(document.body.querySelector('span')).toBeInTheDocument();
	});

	it('renders <span> with `katex` class', async ({ props }) => {
		mount(InlineMath, { props, target: document.body });

		expect(document.body.querySelector('span.katex')).toBeInTheDocument();
	});

	it('renders <span> with content', async ({ props }) => {
		mount(InlineMath, { props, target: document.body });

		expect(document.body.querySelector('span.katex')).toHaveTextContent('C');
	});
});
