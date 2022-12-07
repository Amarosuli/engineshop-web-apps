import { CPOJOs } from '$lib/utils.js';

export const load = async ({ locals }) => {
	const engineFamily = async () => {
		return CPOJOs(await locals.pb.collection('engine_family').getFullList(200));
	};

	return {
		engineFamily: engineFamily()
	};
};

export const actions = {
	update: async ({ locals, request }) => {
		let data = Object.fromEntries(await request.formData());
		let { id } = data;
		delete data.id;
		// check if data is equal or

		// leave if equal, save if not equal

		let result = await locals.pb.collection('engine_family').update(id, data);
		return {
			success: true
		};
	},
	delete: async ({ locals, request }) => {
		let data = Object.fromEntries(await request.formData());
		let { id } = data;

		// let result = await locals.pb.collection('engine_family').delete(id)
	}
};
