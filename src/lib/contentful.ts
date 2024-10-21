import contentful from 'contentful';
const {createClient} = contentful;

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN } from '$env/static/private';

export const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN
});
