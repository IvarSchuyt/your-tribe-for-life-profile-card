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

<div class="written-content">

<section class="name">
	<h1 class="h1-name">
		<PrismicRichText field={slice.primary.name} />
	</h1>
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

<section class="location">
	{slice.primary.location}
</section>

<section class="links">
	<a href="https://github.com/IvarSchuyt" class="link-github" target="_blank">
		<PrismicImage field={slice.primary.LogoGithub} />
	</a>
	<a href="https://www.instagram.com/prodbyishh" class="link-instagram" target="_blank">
		<PrismicImage field={slice.primary.LogoInstagram} />
	</a>	
	<a href="mailto:ivar.schuyt@hva.nl" class="link-email" target="_blank">
		<PrismicImage field={slice.primary.LogoEmail} />
	</a>	
</section>

</div>

<a href="https://www.linkedin.com/in/ivar-schuyt-388a0a228" class="hire-me" target="_blank">Hire me</a>

</div>

<style>
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS','Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		margin: 0;
		color: white;
	}

	.card{
		background: #1F1F1F;
		width: 30rem;
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
		border-radius: 1rem;
		margin: 0 auto;
		margin-top: 4rem;
	}

	.profilepicture{
		align-self: center;
		border-radius: 1rem;
		filter: grayscale(100%);
	}

	.written-content{
		margin: 0 2rem;
	}

	.skill{
		background: #4C4C4C;
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		display: inline-block;
	}

	.location{
		color: #21b16e;
	}
	
	.link-github{
		filter: invert(0.68);
	}

	.link-instagram, .link-email{
		filter: invert(0.32);
	}

	.links{
		display: flex;
		flex-direction: column;
		width: 2rem;
	}

	.hire-me{
		text-decoration: none;
		color: black;
		padding: 1rem;
		background: rgb(42,233,134);
		background: linear-gradient(90deg, rgba(42,233,134,1) 0%, rgba(52,233,95,1) 100%);
		border-radius: 2rem;
		width: 10rem;
		text-align: center;
		align-self: center;
	}

</style>
