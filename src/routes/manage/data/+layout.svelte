<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const navigation = [
		{
			title: 'Family',
			href: '/manage/data/family'
		},
		{
			title: 'Model',
			href: '/manage/data/model'
		},
		{
			title: 'List',
			href: '/manage/data/list'
		}
	];
</script>

<div class="w-full">
	<h3 class="text-2xl font-medium">
		Data Management <span class="p-2 rounded-lg bg-slate-200 text-xs text-red-500"
			>Require Login!</span>
	</h3>
	<div class="divider" />
</div>

<div class="flex space-x-4">
	<div class="menu bg-base-100 w-56 p-2 rounded-box space-y-2">
		{#each navigation as nav}
			<li>
				<a
					href={`${base}` + nav.href}
					class="font-medium {$page.url.pathname === nav.href ? 'active' : ''}">{nav.title}</a>
			</li>
		{/each}
	</div>
	<div class="w-full">
		<slot />
	</div>
</div>
