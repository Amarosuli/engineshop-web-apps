<script>
	export let id = 'id';
	export let label = 'label';
	export let hidden = '';
	export let disabled = '';
	export let options;
	export let required = '';
</script>

<div class="{hidden} form-control w-full">
	<label for={id} class="label">
		<span class="label-text">{label}</span>
	</label>

	<select {required} {id} {disabled} name={id} class="select select-bordered">
		<option value="">Choose Item</option>
		{#if options}
			{#each options as { selected, value, name }}
				<option {selected} {value}>{name}</option>
			{/each}
		{/if}
	</select>
</div>
