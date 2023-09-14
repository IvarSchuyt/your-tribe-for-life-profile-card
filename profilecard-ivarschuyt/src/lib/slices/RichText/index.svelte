<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<section class="name">
	<PrismicRichText field={slice.primary.name} />
</section>

<section class="content">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</section>

<section class="profilepicture">
	<PrismicImage field={slice.primary.profilepicture} />
</section>

<section class="links">
	<PrismicLink field={slice.primary.LinkGithub}>Link</PrismicLink>
	<PrismicLink field={slice.primary.LinkInstagram}>Link</PrismicLink>
	<PrismicLink field={slice.primary.LinkEmail}>Link</PrismicLink>
</section>


<style>
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
</style>
