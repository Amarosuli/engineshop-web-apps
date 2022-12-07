import { CPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	const engineModel = async () => {
		return CPOJOs(await locals.pb.collection('engine_model').getFullList(200));
	};

	return {
		engineModel: engineModel()
	};
};

export const actions = {
	update: async ({ locals, request }) => {
		let data = Object.fromEntries(await request.formData());
		let { id } = data;
		delete data.id;

		let result = await locals.pb.collection('engine_model').update(id, data);

		return {
			success: true
		};
	},
	delete: async ({ locals, request }) => {
		let { id } = Object.fromEntries(await request.formData());

		// let result = await locals.pb.collection('engine_model').delete(id)
	}
};
