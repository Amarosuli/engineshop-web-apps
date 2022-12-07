<script>
	// import Card from '$lib/components/Card.svelte'

	import { Card } from '$lib/components';
	let apps = [
		{
			title: 'Data Management',
			description: 'Controling, Notifications, Alarm for preservation due date..',
			icon: '',
			url: '',
			status: 'progress development'
		},
		{
			title: 'Engine Preservation Control',
			description: 'Controling, Notifications, Alarm for preservation due date..',
			icon: '',
			url: 'app/preservation_control',
			status: 'pre-alpha release'
		},
		{
			title: 'Engine Location Control',
			description: 'Controling, Organize, Map for engine location..',
			icon: '',
			url: 'app/location_control',
			status: 'progress development'
		}
	];
</script>

<div>
	<div class="w-full h-full">
		<h1 class="text-center text-3xl font-extrabold uppercase md:text-5xl">Official Dashboard</h1>
		<h1 class="text-center text-lg font-extrabold md:text-3xl">Engineshop App List</h1>
	</div>

	<div class="w-full mt-6 justify-center items-center mx-auto flex flex-col md:flex-row gap-7">
		{#each apps as app}
			<Card card={app} />
		{/each}
	</div>
</div>
