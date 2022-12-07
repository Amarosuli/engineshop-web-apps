import { SECRET_API_PB } from '$env/static/private'
import PocketBase from 'pocketbase';
import { CPOJOs } from '$lib/utils.js';

export const handle = async ({ event, resolve }) => {
   event.locals.pb = new PocketBase(SECRET_API_PB); // init
   event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || ''); // get cookie or just empty

   try {
      if (event.locals.pb.authStore.isValid) {
         await event.locals.pb.collection('users').authRefresh();
         event.locals.user = CPOJOs(event.locals.pb.authStore.model);
      }
   } catch (_) {
      event.locals.pb.authStore.clear();
      event.locals.user = undefined; // if valid, set user with data else set undefined
   }

   const response = await resolve(event);
   response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false })); // set header, i think it was worth incase accessing data from client

   return response;
};
