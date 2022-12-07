<script>
	export let divClass = 'tabs mx-auto w-3/4 space-x-4';
	export let ulClass = 'tabs';
</script>

<div class={divClass}>
	<ul class={ulClass} role="tablist">
		<slot />
	</ul>
</div>
