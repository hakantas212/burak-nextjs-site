import '../styles/index.css'
import { Context } from "../lib/context.js"
import { fetchHeader } from '../lib/introContentful';
import {useState, useEffect} from "react"





function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchHeader()
      .then(response => response.fields)
      console.log(result)
      setData({
        logo: result.logo.fields.file.url,
        menuItem: result.menuItem
      })
      return result
      
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


