<script lang="ts">
  import { getContext } from "svelte";
  import type { IEventContext, IFilter } from "./types";
  import ButtonShowAll from "./ButtonShowAll.svelte";
  import ButtonFilter from "./ButtonFilter.svelte";

  export let isCollapsed: boolean = false;
	export let showAll: boolean = true;
	export let filters: IFilter[] = [];

  const emit = getContext<IEventContext>('emit')


  $: showAllButtonActive = filters.every((filter) => filter.active)

</script>

<div class="map-filters">
  <div class="title">Map Filters</div>
  <div class="buttons">
    {#if showAll}
      <ButtonShowAll active={showAllButtonActive} />
    {/if}
    <div class="filters">
      {#each filters as filter (filter.title)}
        <ButtonFilter {...filter} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .map-filters {
    display: flex;
    flex-direction: column;
    padding: 8px 15px 15px 15px;
    background: rgba(35, 35, 35, 0.85);
    border-radius: 8px;
    width: 170px;
    gap: 11px;

    .title {
      font-weight: 400;
      font-size: 9px;
      text-align: center;
      text-transform: uppercase;
      color: #bdbdbd;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .filters {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
  }
</style>
