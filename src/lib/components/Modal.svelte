<script>
	// import { enhance } from '$app/forms'
	export let modalId;
	export let deleteBtn = false;
	export let modalName = '';
	export let actionUrl;
	export let method = 'POST';
	export let isForm = false;
</script>

<div class="max-w-xs text-black">
	<label for={modalId} class="btn btn-xs btn-outline">details</label>

	<input type="checkbox" id={modalId} class="modal-toggle" />
	<div class="modal modal-bottom sm:modal-middle">
		<div class="modal-box">
			<div class="flex justify-between">
				<h3 class="font-bold text-lg">{modalName}</h3>
				{#if deleteBtn}
					<button type="button" class="btn btn-primary">Delete?</button>
				{/if}
			</div>
			<slot name="tagline" />
			{#if isForm}
				<form class="flex flex-col justify-center items-center" action={actionUrl} {method}>
					<div class="flex flex-col w-full">
						<slot name="input" />
					</div>
					<div class="flex w-full justify-between mt-6">
						<label for={modalId} class="btn btn-secondary">Cancel</label>
						<button type="submit" class="btn btn-primary">Save</button>
					</div>
				</form>
			{:else}
				<div class="flex flex-col justify-center items-center">
					<div class="flex flex-col w-full">
						<slot name="input" />
					</div>
					<div class="flex w-full justify-between mt-6">
						<label for={modalId} class="btn btn-secondary">Cancel</label>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
