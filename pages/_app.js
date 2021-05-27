/* eslint-disable react/jsx-props-no-spreading */
import '../styles/index.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Context } from '../lib/context';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import { fetchFooter, fetchHeader } from '../lib/introContentful';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState({ header: [], footer: [] });

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const fetchData = async () => {
      const header = await fetchHeader();
      const footer = await fetchFooter();
      setData({
        footer: {
          email: footer.items[0].fields.email,
          footerLinks: footer.items[0].fields.socialMedia.fields,
          footerContent: footer.items[0].fields.footerContent,
        },
        header: {
          logo: header.fields.logo.fields.file.url,
          logoAlt: header.fields.logo.fields.description,
          menuItem: header.fields.menuItem,
        },
      });
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={[data, setData]}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
