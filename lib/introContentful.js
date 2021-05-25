const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: 'intro',
  });
  // console.log(entries)

  if (entries) return entries;
}

export async function fetchAboutEntries() {
  const about = await client.getEntries({
    content_type: 'about',
  });
  return about;
}

export async function fetchHeader() {
  const header = await client.getEntries({
    content_type: 'header',
  });
  return header.items[0];
}

export async function fetchFooter() {
  const footer = await client.getEntries({
    content_type: 'footer',
  });
  return footer;
}
