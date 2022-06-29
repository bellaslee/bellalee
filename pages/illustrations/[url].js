import { useRouter } from 'next/router'
import Article from '../../components/Article'
import Aki from './Aki.js';
import ChildeDelusion from './ChildeDelusion';
import ChildeSnow from './ChildeSnow';
import Jojo from './Jojo';
import Yuta from './Yuta';
import Thoma from './Thoma';
import Head from 'next/head';

export default function Illustration() {
  const router = useRouter();
  const { url } = router.query;

  function component() {
    if (url === 'aki') return <Aki />
    if (url === 'thoma') return <Thoma />
    if (url === 'yuta') return <Yuta />
    if (url === 'jojo') return <Jojo />
    if (url === 'childe-delusion') return <ChildeDelusion />
    if (url === 'childe-snow') return <ChildeSnow />
  }

  return (
    <>
      <Head>
        <title>illustration | bella lee</title>
        <meta property="og:title" content="illustration | bella lee" key="title" />
      </Head>
      <Article>
        {component()}
      </Article>
    </>
  )
}