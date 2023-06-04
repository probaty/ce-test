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
  {:catch}
    <div class="error-box"></div>
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

    .error-box {
      width: 15px;
      height: 15px;
      background: red;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      --icon-bg-color: #959697;
      --icon-foreground-color: #595959;

      :global(svg *) {
        transition: all 0.3s;
      }
    }

    .text {
      font-weight: 400;
      font-size: 13px;
      color: #bdbdbd;
      transition: color 0.3s;
    }

    &:hover {
      background: #636363;
    }
    &.active {
      background: #dadada;

      .text {
          color: #2f2f2f;
      }

      .icon {
        --icon-bg-color: unset;
      --icon-foreground-color: unset;
      }

      &:hover {
        background: #f7f7f7;
      }
    }


  }

</style>
