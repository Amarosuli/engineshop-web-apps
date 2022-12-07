<script>
	export let activeTabValue;
	export let id;
	export let buttonClass = `tab tab-lifted`;
	export let buttonClassActive = `tab tab-lifted tab-active font-bold`;
	export let liClass = 'mr-2';
</script>

<li class={liClass} role="presentation">
	<button
		on:click
		class={activeTabValue == id ? buttonClassActive : buttonClass}
		id="{id}-tabhead"
		type="button"
		role="tab">
		<slot />
	</button>
</li>
