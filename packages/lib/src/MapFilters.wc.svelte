<svelte:options tag="dpg-aldar-ui-map-filters" />

<script lang="ts">
	import { get_current_component, onMount, setContext } from "svelte/internal";
  import type { IFilter,  IEventContext } from "./types";
  import MapFilters from "./MapFilters.svelte";

	/**
	 * Props
	 */
	export let collapsed: boolean = false;
	export let show_all: boolean = false;
	export let filters: IFilter[] = [];


	/**
	 * Hacks
	 */
	const component = get_current_component();
	const emit = (name: string, detail: any) => component.dispatchEvent(new CustomEvent(name, { detail }));
	let mounted = false;
	onMount(() => {
		mounted = true;

		return () => (mounted = false);
	});

	setContext<IEventContext>("emit", emit);
</script>

{#if mounted}
	<MapFilters {filters} {collapsed} {show_all} />
{/if}
<slot />

<style lang="scss">
	:host {
		max-width: 100%;
	}
</style>
