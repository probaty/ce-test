<script lang="ts">
  import { getContext } from "svelte";
  import type { IEventContext, IFilter } from "./types";
  import ButtonShowAll from "./ButtonShowAll.svelte";
  import ButtonFilter from "./ButtonFilter.svelte";
  import {slide} from 'svelte/transition';

  export let collapsed: boolean;
	export let show_all: boolean;
	export let filters: IFilter[];

  const emit = getContext<IEventContext>('emit')

  const handleToggleAll = () => {
    const newFilters = filters.map((filter) => {
      return { ...filter, active: !showAllButtonActive };
    });
    emit("change", newFilters);
  };

  const onClick = (name: string) => {
    const newFilters = filters.map((filter) => {
      if (filter.title === name) {
        return { ...filter, active: !filter.active };
      }
      return filter;
    });
    emit('click', name)
    emit("change", newFilters);
  };

  $: showAllButtonActive = filters.every((filter) => filter.active)

</script>

<div class="map-filters">
  <span class="title">Map Filters</span>
  {#if !collapsed}

  <div class="buttons" transition:slide|local>
    {#if show_all}
      <ButtonShowAll active={showAllButtonActive} on:click={handleToggleAll} />
    {/if}
    <div class="filters">
      {#each filters as filter (filter.title)}
        <ButtonFilter {...filter} on:click={() => onClick(filter.title)} />
      {/each}
    </div>
  </div>
  {/if}
</div>

<style lang="scss">
  .map-filters {
    display: flex;
    flex-direction: column;
    padding: 8px 15px 15px 15px;
    background: rgba(35, 35, 35, 0.85);
    border-radius: 8px;
    width: 170px;

    .title {
      font-weight: 400;
      font-size: 9px;
      text-align: center;
      text-transform: uppercase;
      color: #bdbdbd;
      line-height: 130%;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 11px;
      margin-top: 11px;
    }
    .filters {
      display: flex;
      flex-direction: column;
      gap: 1px;
      border-radius: 8px;
      overflow: hidden;
    }
  }
</style>
