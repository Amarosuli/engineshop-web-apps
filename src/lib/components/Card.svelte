<script>
	import { base } from '$app/paths';

	export let card;
</script>

<a
	href={`${base}/${card.url}`}
	class="p-4 w-64 h-44 bg-stone-100 shadow-md rounded-md hover:scale-105 hover:shadow-xl transition-all ease-in-out">
	<div class="h-full">
		<h1 class="font-bold text-xl">{card.title}</h1>
		<p class="text-sm pt-3">{card.description}</p>
	</div>
	<div class="text-xs flex justify-end mt-2">
		<p
			class="italic outline outline-1 outline-stone-300 text-stone-700 px-3 py-1 w-fit rounded-xl self-center bg-green-100">
			{card.status}
		</p>
	</div>
</a>
