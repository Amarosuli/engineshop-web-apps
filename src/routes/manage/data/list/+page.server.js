import { CPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	const engineList = async () => {
		let data = CPOJOs(
			await locals.pb.collection('engine_list').getFullList(200, {
				expand: 'family_id, model_id, customer_id, project_id'
			})
		);

		data.map((d) => {
			d.family = d.expand.family_id.name;
			d.model = d.expand.model_id.name;
			d.customer = d.expand.customer_id.name;
			d.project = d.expand.project_id.name;
		});

		// console.log(data)
		return data;
	};

	return {
		engineList: engineList()
	};
};

export const actions = {
	update: async ({ locals, request }) => {
		let data = Object.fromEntries(await request.formData());
		let { id } = data;
		delete data.id;

		let result = await locals.pb.collection('engine_list').update(id, data);

		return {
			success: true
		};
	},
	delete: async ({ locals, request }) => {
		let { id } = Object.fromEntries(await request.formData());

		// let result = await locals.pb.collection('engine_list').delete(id)
	}
};
