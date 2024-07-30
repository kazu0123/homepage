import type { PageServerLoad } from "./$types";

import { getProjects } from "$lib/Project";


export const load: PageServerLoad = async () => {
  const projects = await getProjects();

  return { projects }
}