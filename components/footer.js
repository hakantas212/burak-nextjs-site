import Container from './container'
import React, { useContext } from "react"
import { Context } from "../lib/context"
import Link from 'next/link'


export default function Footer() {
  const [data, setData] = useContext(Context);
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-col items-center">
          <div className="flex flex-col lg:flex-col justify-center items-center text-center lg:w-1/2">
              <h3 className="text-4xl py-4 lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                Get in touch
              </h3>
              <h4 className="py-5">{data.footer.footerContent}</h4>
          </div>
          <div className="w-8 flex flex-row lg:flex-row justify-center lg:w-1/2">
          { data.footer.footerLinks &&
            <a className="p-0 mx-4 w-12 h-12" target="_blank" href={data.footer.footerLinks.socialMediaLink}>
              <img className="object-contain h-9 w-10" src={data.footer.footerLinks.socialMediaIcon.fields.file.url}></img>
            </a>
          }
          {
            <a className="p-0 mx-4 w-12 h-12" href={`mailto:${data.footer.email}`}>
              <svg width="100px" height="80px" xmlns="http://www.w3.org/2000/svg" className="bg-transparent object-contain flex items-center text-blue-700 border-blue-500" fill="none" viewBox="0 0 40 40" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a> 
            
          }

          </div>

        </div>
      </Container>
    </footer>
  )
}
