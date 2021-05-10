import Container from '../components/container'
import Intro from '../components/intro'
import Header from '../components/header'
import Layout from '../components/layout'
import { fetchAboutEntries } from '../lib/introContentful'
import Image from 'next/image'

export default function About({about}) {

  return (
    <>
      <Layout >
        <Container>
        <Header />
          <div className="flex flex-col">
          <Image 
            src={`https:${about.profilePicture.fields.file.url}`}
            alt={`profile image`}
            width={150}
            height={150}
            priority={true}
            layout="fixed"
            quality={65}
            className="max-w-xs overflow-hidden rounded-lg shadow-lg"
          />
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


