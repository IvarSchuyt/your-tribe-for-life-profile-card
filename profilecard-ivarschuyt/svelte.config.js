<<<<<<< HEAD
<<<<<<< HEAD
import adapter from "@sveltejs/adapter-vercel";
=======
import adapter from '@sveltejs/adapter-auto';
>>>>>>> parent of 61a10a3 (adapter vercel)
=======
import adapter from '@sveltejs/adapter-auto';
>>>>>>> parent of 61a10a3 (adapter vercel)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
