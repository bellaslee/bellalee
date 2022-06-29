import { useRouter } from 'next/router'
import Article from '../../components/Article';
import Ostomate from './Ostomate';
import PersonalWebsite from './PersonalWebsite';
import Head from 'next/head';

export default function Illustration() {
  const router = useRouter();
  const { url } = router.query;

  function component() {
    if (url === 'ostomate') return <Ostomate />
    if (url === 'personal-website') return <PersonalWebsite />
  }

  return (
    <>
      <Head>
        <title>project | bella lee</title>
        <meta property="og:title" content="project | bella lee" key="title" />
      </Head>
      <Article>
        {component()}
      </Article>
    </>
  )
}