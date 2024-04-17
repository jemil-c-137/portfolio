import { performRequest } from '@/lib/datocms';
import Hero from '@/src/components/Hero';
const PAGE_CONTENT_QUERY = `
    query Home {
        homepage {
            title
        }
    }`;


export default async function Page() {
    const data = await performRequest( { query: PAGE_CONTENT_QUERY } );

    console.log('data', data);

    return(
        <>
            <Hero />
        </>
    )
}