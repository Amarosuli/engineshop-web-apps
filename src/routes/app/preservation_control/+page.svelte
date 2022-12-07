<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { InformationCircle } from '@steeze-ui/heroicons';
	import { Modal, Input } from '$lib/components';

	import { nextPreservation, dateFormat, DTG } from '$lib/utils.js';
	import Select from '../../../lib/components/Select.svelte';

	export let data;
	let { preservation } = data;

	// console.log(preservation);
	let nextdue = 0;
	let overdue = 0;
	$: overdue;
	$: nextdue;

	let overdueArr = [];
	$: overdueArr;
	let nextdueArr = [];
	$: nextdueArr;

	preservation.forEach((p) => {
		if (p.preserve) {
			let value = DTG(p.preserve.last_preservation, parseInt(p.preserve.duration), false);
			if (value < 0) {
				overdueArr[overdue] = p;
				overdue += 1;
			} else if (value <= 14) {
				nextdueArr[nextdue] = p;
				nextdue += 1;
			}
		}
	});

	let optionDuration = [
		{
			value: '90',
			selected: false,
			name: '90 Days'
		},
		{
			value: '180',
			selected: false,
			name: '180 Days'
		},
		{
			value: '360',
			selected: false,
			name: '360 Days'
		}
	];
	const durationFilter = (duration) => {
		return optionDuration.map((n) => {
			if (n.value.toString() == duration.toString()) {
				n.selected = true;
			}
			return n;
		});
	};
</script>

<div class="w-full">
	<div class="w-full hidden md:block">
		<h1 class="text-center text-3xl font-extrabold uppercase lg:text-5xl">Official Dashboard</h1>
		<h1 class="text-center text-lg font-extrabold lg:text-3xl">Engine Preservation Control</h1>
	</div>

	<div class="">
		<div class="text-xs hidden md:flex justify-end">
			<Icon src={InformationCircle} theme="solid" class="w-5 h-5" />
			<p class="italic pl-1">Table for all instance</p>
		</div>
		<div class="flex flex-col justify-center items-center lg:flex-row space-y-4 space-x-4">
			<div class="flex flex-col w-full lg:w-fit items-center bg-orange-300/20 rounded-lg p-3">
				<div class="w-full mb-2 md:my-4">
					<h1 class="text-center text-2xl font-extrabold uppercase md:text-3xl">Summary</h1>
				</div>
				<div class="stats lg:stats-vertical shadow">
					<div class="stat w-fit place-items-center md:place-items-start">
						<div class={`stat-figure text-secondary ${overdue > 0 ? 'animate-bounce' : ''}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-8 h-8 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
						</div>
						<div class="stat-title">Overdue</div>
						<div class="stat-value text-2xl sm:text-3xl">{overdue} EA</div>
						<div class="stat-desc hidden md:block">Click button below to see the detail.</div>
						<div class="stat-actions">
							<!-- <button class="btn btn-xs md:btn-sm btn-success">Details</button> -->
							<Modal modalName="List Overdue" modalId="overdue">
								<p slot="tagline" class={`p-4 mt-2 italic whitespace-normal bg-yellow-100`}>
									List Overdue is all engine with over date
								</p>
								<div slot="input" class="mt-6">
									{#each overdueArr as { esn, model, preserve }}
										<div
											class="mb-2 flex w-full rounded-md shadow-md justify-between items-center bg-slate-100">
											<p class="rounded-md px-2 py-3">
												{esn} <span class="text-slate-600">{model}</span>
											</p>
											<p class="rounded-md px-2 py-3">
												{DTG(preserve.last_preservation, parseInt(preserve.duration))}
											</p>
										</div>
									{/each}
								</div>
							</Modal>
						</div>
					</div>

					<div class="stat w-fit place-items-center md:place-items-start">
						<div class={`stat-figure text-secondary ${nextdue > 0 ? 'animate-pulse' : ''}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-8 h-8 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						</div>
						<div class="stat-title">Nextdue</div>
						<div class="stat-value text-2xl sm:text-3xl">{nextdue} EA</div>
						<div class="stat-desc hidden md:block">Click button below to see the detail.</div>
						<div class="stat-actions">
							<Modal modalName="List Nextdue" modalId="nextdue">
								<p slot="tagline" class={` p-4 mt-2 italic whitespace-normal bg-yellow-100`}>
									List Nextdue count from two weeks before expired date.
								</p>
								<div slot="input" class="mt-6">
									{#each nextdueArr as { esn, model, preserve }}
										<div
											class="mb-2 flex w-full rounded-md shadow-md justify-between items-center bg-slate-100">
											<p class="rounded-md px-2 py-3">
												{esn} <span class="text-slate-600">{model}</span>
											</p>
											<p class="rounded-md px-2 py-3">
												{DTG(preserve.last_preservation, parseInt(preserve.duration))}
											</p>
										</div>
									{/each}
								</div>
							</Modal>
						</div>
					</div>

					<div class="stat hidden lg:block place-items-center md:place-items-start">
						<div class="stat-title">Total Engine Monitor</div>
						<div class="stat-value text-2xl sm:text-3xl">{preservation.length} EA</div>
						<div class="stat-desc">except overhaull, bare, & released engine.</div>
					</div>
				</div>
			</div>
			<div class="flex overflow-x-auto w-screen md:w-full max-h-[40rem] ">
				<table class="table text-xs table-zebra w-full">
					<!-- head -->
					<thead class="sticky top-0 bg-slate-700">
						<tr>
							<th class="opacity-0" />
							<th>ESN</th>
							<th class="hidden md:block">Family</th>
							<th>Model</th>
							<th class="hidden md:block">Config</th>
							<th>Customer</th>
							<th>Last Preservation</th>
							<th>Next Preservation</th>
							<th>Due To Go</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{#each preservation as { id, esn, family, model, config, preserve = 0, customer }, index}
							<tr>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}>{index + 1}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}>{esn}</td>
								<td
									class={preserve
										? 'hidden md:block'
										: 'text-orange-300 font-semibold hidden md:block content-center'}>{family}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}>{model}</td>
								<td
									class={preserve
										? ' hidden md:block'
										: 'text-orange-300 font-semibold hidden md:block'}>{config}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}>{customer}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}
									>{preserve ? dateFormat(preserve.last_preservation) : 'No Preservation Data'}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}
									>{preserve
										? nextPreservation(preserve.last_preservation, parseInt(preserve.duration), {
												formatted: true
										  })
										: 'No Preservation Data'}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}
									>{preserve
										? DTG(preserve.last_preservation, parseInt(preserve.duration))
										: 'No Preservation Data'}</td>
								<td class={preserve ? '' : 'text-orange-300 font-semibold'}>
									<Modal
										isForm="true"
										modalName={preserve ? 'Update Preservation Data' : 'Insert Preservation Data'}
										modalId={esn}
										actionUrl={preserve ? '?/update' : '?/create'}>
										<p
											slot="tagline"
											class={`p-4 mt-2 whitespace-normal bg-yellow-100 ${
												preserve ? '' : 'hidden'
											}`}>
											Peringatan! Menghapus data utama akan menghapus semua data yang memiliki
											relasi terhadap data ini. Anda sebaiknya tidak menghapus data ini jika tidak
											dalam kondisi mendesak.
										</p>
										<div slot="input">
											<Input hidden id="id" label="" value={preserve ? preserve.id : null} />
											<Input hidden id="engine_id" label="( {id} )" placeholder={id} value={id} />
											<Input id="esn" label="Engine Serial Number" placeholder={esn} value={esn} />
											<!-- <Input id='duration' label='Duration' placeholder={preserve ? preserve.duration : ''} value={preserve ? preserve.duration : ''} /> -->
											<Input
												type="date"
												id="last_preservation"
												label="Last Preservation"
												placeholder={preserve ? preserve.last_preservation : ''}
												value={preserve
													? new Date(preserve.last_preservation).toISOString().split('T')[0]
													: ''} />
											<Select
												id="duration"
												required
												label="Duration"
												options={preserve ? durationFilter(preserve.duration) : optionDuration} />
											<Input
												disabled="disabled"
												id="material_requirements"
												label="Material Requirements"
												placeholder={preserve ? preserve.material_requirements : ''}
												value={preserve.material_requirement} />
											<Input
												disabled="disabled"
												type="file"
												id="tag"
												label="Tag Pitcure"
												placeholder={preserve ? preserve.tag : ''}
												value={preserve ? preserve.tag : ''} />
										</div>
									</Modal>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
