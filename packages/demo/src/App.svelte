<script lang="ts">
	import "../../lib";
	// import Path from "../../lib/src/Path.svelte";

	let filters = [
    {
      title: "Landmarks",
      icon: "/public/svg/retail.svg",
      active: true,
    },
    {
      title: "Metro",
      icon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z" fill="var(--icon-bg-color, #51AD6B)" fill-opacity="0.9528"/>
<path d="M8.24609 6.28117C8.24609 6.3446 8.24609 6.40804 8.30953 6.47147L9.13415 7.2961L8.94385 8.43789C8.94385 8.56476 9.00729 8.62819 9.07072 8.62819C9.13415 8.62819 9.13415 8.62819 9.19759 8.62819L10.2125 8.12073L11.2274 8.62819C11.2909 8.69162 11.4177 8.62819 11.4812 8.56476C11.4812 8.50132 11.4812 8.50132 11.4812 8.43789L11.2909 7.2961L12.1155 6.47147C12.1789 6.40804 12.1789 6.28117 12.1155 6.21774C12.1155 6.21774 12.0521 6.15431 11.9886 6.15431L10.8468 5.96401L10.3394 4.94908C10.2759 4.88565 10.2125 4.82222 10.0856 4.88565C10.0222 4.88565 10.0222 4.94908 10.0222 4.94908L9.51475 5.96401L8.37296 6.15431C8.37296 6.21774 8.30953 6.21774 8.24609 6.28117Z" fill="var(--icon-foreground-color, white)"/>
<path d="M14.0186 7.86562C14.0186 7.73876 13.9552 7.67532 13.8284 7.67532C13.7015 7.67532 13.6381 7.73876 13.6381 7.86562C13.3843 10.1492 11.291 11.735 9.07089 11.4813C6.85074 11.2276 5.20149 9.13428 5.45522 6.91413C5.70895 5.01114 7.16791 3.55219 9.07089 3.29846C9.19776 3.29846 9.26119 3.23503 9.26119 3.10816C9.26119 2.98129 9.19776 2.91786 9.07089 2.91786C6.02611 2.6007 3.2985 4.82085 2.98134 7.86562C2.66417 10.9104 4.88432 13.638 7.9291 13.9552C10.9739 14.2723 13.7015 12.0522 14.0186 9.00741C14.0186 8.81712 14.0186 8.62682 14.0186 8.43652C14.0821 8.24622 14.0821 8.05592 14.0186 7.86562Z" fill="var(--icon-foreground-color, white)"/>
</svg>
`,
      active: true,
    },
  ]

	let isCollapsed = false

	const handelChange = (e: CustomEvent) => {
		filters = e.detail
	 }
</script>

<div class="example">
	<button on:click={() => isCollapsed = !isCollapsed}>Toggle</button>
</div>

<div class="example t">
	<dpg-aldar-ui-map-filters filters={filters} show_all={true} collapsed={isCollapsed} on:change={handelChange} />
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
