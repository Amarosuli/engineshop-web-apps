<script>
	import { Modal, Input } from '$lib/components';

	export let data;
	let { engineModel } = data;
</script>

<div class="w-full h-full">
	<div class="overflow-x-auto">
		<table class="table table-zebra w-full">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Description</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each engineModel as { id, name, description }, index}
					<tr>
						<th>{index + 1}</th>
						<td>{name}</td>
						<td>{description}</td>
						<td
							><Modal modalId={id} actionUrl="?/update">
								<div slot="input">
									<Input id="id" label="Id" hidden="hidden" placeholder={id} value={id} />
									<Input id="name" label="Name" placeholder={name} value={name} />
									<Input
										id="description"
										label="Description"
										placeholder={description}
										value={description} />
								</div>
							</Modal></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
