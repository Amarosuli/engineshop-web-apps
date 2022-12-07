<script>
	import { Modal, Input } from '$lib/components';

	export let data;
	let { engineList } = data;
</script>

<div class="w-full">
	<div class="overflow-x-auto h-[80vh]">
		<table class="table table-zebra w-full">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th>ESN</th>
					<th>Family</th>
					<th>Model</th>
					<th>Config</th>
					<th>Customer</th>
					<th>Project</th>
					<th>inShop?</th>
				</tr>
			</thead>
			<tbody>
				{#each engineList as { id, esn, family, model, config, customer, project, inShop }, index}
					<tr>
						<th>{index + 1}</th>
						<td>{esn}</td>
						<td>{family}</td>
						<td>{model}</td>
						<td>{config}</td>
						<td>{customer}</td>
						<td>{project}</td>
						<td>{inShop ? 'Yes' : 'No'}</td>
						<td
							><Modal modalId={id} actionUrl="?/update">
								<div slot="input">
									<!-- <Input id='id' label='Id' hidden='hidden' placeholder={id} value={id} />
                     <Input id='name' label='Name' placeholder={name} value={name} />
                     <Input id='description' label='Description' placeholder={description} value={description} /> -->
								</div>
							</Modal></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
