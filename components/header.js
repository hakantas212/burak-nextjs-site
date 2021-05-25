import Link from 'next/link';
import React, { useContext } from 'react';
import { Context } from '../lib/context';

export default function Header() {
  const [data, setData] = useContext(Context);
  return (
    <div className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <section className="flex-1">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          <Link href="/">
            <a>
              <img alt={data.header.logoAlt} className="object-contain h-auto w-20" src={data.header.logo} />
            </a>
          </Link>
        </h1>
      </section>
      <section className="flex-1 flex justify-end">
        {data.header.menuItem && data.header.menuItem.map((menuLink, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Link key={index} href={`/${menuLink.fields.linkUrl}`}>
            <a className="ml-16">{menuLink.fields.linkName}</a>
          </Link>
        ))}
      </section>
    </div>
  );
}
