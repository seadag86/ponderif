import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = async (event) => {
//     return {
//         session: await event.locals.getSession()
//     };
// };
export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
    return {
        session: await getSession()
    };
};
