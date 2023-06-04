<script lang="ts">
  export let active: boolean;
</script>

<button class="btn-show-all" class:active on:click> Show all </button>

<style lang="scss">
  .btn-show-all {
    height: 25px;
    display: flex;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 5px 9px;
    cursor: pointer;
    background: #595959;
    border: none;
    transition: background 0.3s;
    font-weight: 500;
font-size: 13px;
color: #bdbdbd;


    &:hover {
      background: #636363;
    }
    &.active {
      background: #dadada;
      color: #2f2f2f;


      &:hover {
        background: #f7f7f7;
      }
    }
  }
</style>
