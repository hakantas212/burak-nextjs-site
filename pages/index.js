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
            {/* <div>
              <a className="" href={`mailto:${res.contact}`}>       <h1 className="text-2xl mr-1">Contact me</h1>     </a>
            </div> */}
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


