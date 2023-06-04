import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
	root: "./packages/demo/",
	resolve: {
		dedupe: ["svelte"],
	},
	build: {
		outDir: "../../dist/demo",
		emptyOutDir: true,
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
			exclude: /\.wc\.svelte$/ as any,
			hot: false,
			emitCss: false,
			compilerOptions: {
				customElement: false,
			},
		}),
		svelte({
			preprocess: sveltePreprocess(),
			include: /\.wc\.svelte$/ as any,
			hot: false,
			emitCss: false,
			compilerOptions: {
				customElement: true,
			},
		}),
	],
});
