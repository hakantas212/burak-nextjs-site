import Container from '../components/container'
import Intro from '../components/intro'
import Header from '../components/header'
import Layout from '../components/layout'
import { fetchAboutEntries } from '../lib/introContentful'

export default function About({about}) {

  return (
    <>
      <Layout >
        <Container>
        <Header />
          <div className="flex flex-col">
            {
              <Intro title={about.heroText} subtitle={about.aboutMe} />
            }
          </div>
        </Container>
      </Layout>
    </>
  )
}




export async function getStaticProps() {
  const about = await fetchAboutEntries()
  return {
    props: {
      about: about.items[0].fields
    },
  }
}


