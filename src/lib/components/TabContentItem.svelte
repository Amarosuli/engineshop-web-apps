<script>
	export let activeTabValue;
	export let id;
	export let contentDivClass = 'p-4 bg-gray-50 border border-t-0';
</script>

{#if activeTabValue === id}
	<div class={contentDivClass} id="{id}-tabitem" role="tabpanel" aria-labelledby="{id}-tab">
		<slot />
	</div>
{/if}
