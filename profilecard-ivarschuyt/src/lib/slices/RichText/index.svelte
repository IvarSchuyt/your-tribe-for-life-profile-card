<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
</script>

<div class="card">

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

<section class="name">
	<PrismicRichText field={slice.primary.name} />
</section>

<section class="skills">
	<p class="skill">
		{slice.primary.skill1}
	</p>
	<p class="skill">	
		{slice.primary.skill2}
	</p>
	<p class="skill">
		{slice.primary.skill3}
	</p>
</section>

<section class="links">
		<PrismicLink field={slice.primary.LinkGithub}>Github</PrismicLink>
		<PrismicLink field={slice.primary.LinkInstagram}>Instagram</PrismicLink>
		<PrismicLink field={slice.primary.LinkEmail}>Ivar.schuyt@hva.nl</PrismicLink>
</section>

</div>


<style>
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		margin: 0;
		color: white;
	}

	.card{
		background: #1F1F1F;
		width: 30rem;
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
		border-radius: 1rem;
	}

	.profilepicture{
		align-self: center;
		border-radius: 1rem;
		filter: grayscale(100%);
	}

	.skill{
		background: #4C4C4C;
		border-radius: 1rem;
		padding: 0.5rem;
	}

</style>
