import { useRouter } from 'next/router'
import Article from '../../components/Article';
import Ostomate from './Ostomate';
import PersonalWebsite from './PersonalWebsite';

export default function Illustration() {
  const router = useRouter();
  const { url } = router.query;

  function component() {
    if (url === 'ostomate') return <Ostomate />
    if (url === 'personal-website') return <PersonalWebsite />
  }

  return (
    <Article>
      {component()}
    </Article>
  )
}