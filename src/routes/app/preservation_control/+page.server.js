import { CPOJOs } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
   const getEngine = async () => {
      return CPOJOs(await locals.pb.collection('engine_list').getFullList(200, { expand: 'project_id' }));
   };

   const getPreservation = async () => {
      return CPOJOs(await locals.pb.collection('engine_preservation').getFullList(200));
   };

   const getDataFiltered = async () => {
      let container = await getEngine();
      let preservation = CPOJOs(await getPreservation());
      let model = CPOJOs(await locals.pb.collection('engine_model').getFullList(200));
      let family = CPOJOs(await locals.pb.collection('engine_family').getFullList(200));
      let customer = CPOJOs(await locals.pb.collection('customer_list').getFullList(200));

      container = container.filter(engine => engine.inShop == true)
      container = container.filter(engine => engine.excludePreserve == false)
      container = container.filter(engine => engine.expand.project_id.code != 'EO')
      container.map((engine) => {
         engine.preserve = preservation.find((preservation) => preservation.engine_id == engine.id);
         engine.model = model.filter((model) => model.id == engine.model_id)[0].name;
         engine.family = family.filter((family) => family.id == engine.family_id)[0].name;
         engine.customer = customer.filter((customer) => customer.id == engine.customer_id)[0].name;
      });
      console.log(container)
      return container;
   };

   return {
      preservation: getDataFiltered()
   };
};

export const actions = {
   update: async ({ locals, request }) => {
      let data = Object.fromEntries(await request.formData());
      let { id } = data;
      delete data.id;
      delete data.esn;

      let result = await locals.pb.collection('engine_preservation').update(id, data);
      console.log(result);
      return {
         success: true
      };
   },
   create: async ({ locals, request }) => {
      let data = Object.fromEntries(await request.formData());
      if (data.id) {
         return;
      } else {
         delete data.esn;
         try {
            let result = await locals.pb.collection('engine_preservation').create(data);
            console.log(result);
         } catch (error) {
            console.log(error);
         }
      }
   }
};
