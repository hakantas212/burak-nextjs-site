import Image from 'next/image';
import Container from '../components/container';
import Intro from '../components/intro';
import Header from '../components/header';
import Layout from '../components/layout';
import { fetchAboutEntries } from '../lib/introContentful';

export default function About({ about }) {
  return (
    <>
      <Layout>
        <Container>

          <Header />
          <div style={{ whiteSpace: 'break-spaces' }} className="flex flex-col whitespace-pre-line">
            <Image
              src={`https:${about.profilePicture.fields.file.url}`}
              alt="profile image"
              width={150}
              height={150}
              priority
              layout="fixed"
              quality={100}
              className="max-w-xs overflow-hidden rounded-lg shadow-lg"
            />
            <Intro title={about.heroText} subtitle={about.aboutMe} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const about = await fetchAboutEntries();
  return {
    props: {
      about: about.items[0].fields,
    },
  };
}
