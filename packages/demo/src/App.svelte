<script lang="ts">
	import "../../lib";
	// import Path from "../../lib/src/Path.svelte";

	let filters = [
    {
      title: "Landmarks",
      icon: "svg or path",
      active: true,
    },
    {
      title: "Metro",
      icon: "svg or path",
      active: true,
    },
  ]
</script>

<div class="example">

</div>

<div class="example t">
	<dpg-aldar-ui-map-filters filters={filters} />
</div>

<style lang="scss">
	.example {
		width: 100%;
		display: flex;

		&.t {
			width: 250px;
		}
	}
</style>
