const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

export async function fetchEntries() {
  const entries = await client.getEntry({
    id: "intro"
  })
  // console.log(entries)
  if (entries) return entries
 
  console.log(`Error getting Entries for ${contentType.name}.`)
}


export async function fetchAboutEntries() {
  const about = await client.getEntries({
    content_type: 'about',
  })
  return about;

}


export default {  fetchAboutEntries  }