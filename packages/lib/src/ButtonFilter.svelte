<script lang="ts">
  import { loadSvg } from "./helpers";

  export let active: boolean = false;
  export let icon: string = "";
  export let title: string = "";

</script>

<button class="filter-button" class:active on:click>
  <div class="text">{title}</div>
  {#await loadSvg(icon) then iconData }
    <div class="icon">
      {@html iconData}
    </div>
  {/await}
</button>

<style lang="scss">
  .filter-button {
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 9px;
    cursor: pointer;
    background: #595959;
    border: none;
    transition: background 0.3s;

    &:hover {
      background: #636363;
    }
    &.active {
      background: #dadada;

      &:hover {
        background: #f7f7f7;
      }
    }

    .text {
      font-weight: 400;
      font-size: 13px;
      color: #bdbdbd;
      transition: color 0.3s;
    }
  }

</style>
