<script>
	export let id = 'id';
	export let label = 'label';
	export let placeholder = 'Type here';
	export let type = 'text';
	export let hidden = '';
	export let disabled = '';
	export let value;
	export let required = '';
</script>

<div class="{hidden} form-control w-full">
	<label for={id} class="label">
		<span class="label-text">{label}</span>
	</label>

	{#if type == 'date'}
		<input
			{id}
			{required}
			{disabled}
			{hidden}
			name={id}
			{type}
			{placeholder}
			{value}
			class={type == 'text' || type == 'date'
				? 'input input-bordered w-full'
				: type == 'file'
				? 'file-input file-input-bordered w-full max-w-xs'
				: ''}
			pattern={type == 'date' ? 'd{4}-d{2}-d{2}' : ''} />
	{:else}
		<input
			{id}
			{required}
			{disabled}
			{hidden}
			name={id}
			{type}
			{placeholder}
			{value}
			class={type == 'text' || type == 'date'
				? 'input input-bordered w-full'
				: type == 'file'
				? 'file-input file-input-bordered w-full max-w-xs'
				: ''} />
	{/if}
</div>
