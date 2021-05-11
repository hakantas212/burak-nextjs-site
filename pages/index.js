import Container from '../components/container'
import Intro from '../components/intro'
import Header from '../components/header'
import Layout from '../components/layout'
import { fetchEntries } from '../lib/introContentful'

export default function Index({res}) {

  return (
    <>
      <Layout >
        <Container>
        <Header />
          <div className="flex flex-col">
            {
              <Intro title={res.introTitle} subtitle={res.subtitle} />
            }
            <div>
              <a className="bg-transparent flex items-center text-blue-700 border-blue-500" href={`mailto:${res.contact}`}>       <h1 className="text-2xl mr-1">Contact me</h1>     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg></a>
</div>
          </div>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  return {
    props: {
      res: res.items[0].fields
    },
  }
}


