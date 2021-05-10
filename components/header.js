import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <section className="flex-1">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          <Link href="/">
            <a>
              B.
            </a>
          </Link>
          </h1>
      </section>
      <section className="flex-1 flex justify-end">
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        <Link href="/about">
            <a className="ml-16">About</a>
        </Link>
      </section>
   </div>
  )
}
