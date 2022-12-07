import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';


export const load = ({ locals }) => {
   // if (!locals.pb.authStore.isValid) {
   //    throw redirect(303, '/login')
   // } else {
   throw redirect(303, `${base}/manage/data/family`);
   // }
};
