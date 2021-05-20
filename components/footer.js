import Container from './container'
import React, { useContext } from "react"
import { Context } from "../lib/context"
import Link from 'next/link'


export default function Footer() {
  const [data, setData] = useContext(Context);
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-row lg:flex-row">
          <div className="flex flex-col lg:flex-col justify-center lg:w-1/2">
              <h3 className="text-4xl py-4 lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                  {
                    <a href={`mailto:${data.footer.email}`}>Get in touch</a> 
                  }
              </h3>
              <h4>{data.footer.footerContent}</h4>
          </div>
          <div className="w-8 flex flex-col lg:flex-col justify-center lg:w-1/2">
          { data.footer.footerLinks &&
               <Link href={data.footer.footerLinks.socialMediaLink}>
               <img className="object-contain h-48 w-full" src={data.footer.footerLinks.socialMediaIcon.fields.file.url}></img>
             </Link>
          }
          </div>
        </div>
      </Container>
    </footer>
  )
}
