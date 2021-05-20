import '../styles/index.css'
import { Context } from "../lib/context.js"
import { fetchFooter, fetchHeader } from '../lib/introContentful';
import {useState, useEffect} from "react"


function MyApp({ Component, pageProps }) {
  const [data, setData] = useState({header: [], footer: []});

  useEffect(() => {
    const fetchData = async () => {
      const header = await fetchHeader()
      const footer = await fetchFooter()
      setData({
        footer: {
        email: footer.items[0].fields.email,
        footerLinks: footer.items[0].fields.socialMedia.fields,
        footerContent: footer.items[0].fields.footerContent
        }, 
        header:{ 
          logo: header.fields.logo.fields.file.url,
          logoAlt:header.fields.logo.fields.description,
          menuItem: header.fields.menuItem
        }
      })
    };
 
    fetchData();
  }, []);

  return (
    <Context.Provider value={[data, setData]}>
      <Component {...pageProps} />
    </Context.Provider>
  )

}





export default MyApp


