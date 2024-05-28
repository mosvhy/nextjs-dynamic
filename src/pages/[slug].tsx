// pages/[slug].tsx

import Meta from '@/components/Meta';
import { apiPageDetail } from '@/services/api';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import NotFound from './error/NotFound';

const SectionHeader = dynamic(() => import('@/components/header'), {
  ssr: true,
  loading: () => <>Loading...</>
});
const SectionHero = dynamic(() => import('@/components/hero'), {
  ssr: true,
  loading: () => <>Loading...</>
});
const SectionSlider = dynamic(() => import('@/components/slider'), {
  ssr: true,
  loading: () => <>Loading...</>
});
const SectionCTA = dynamic(() => import('@/components/cta'), {
  ssr: true,
  loading: () => <>Loading...</>
});

const Page = ({ pageContent }: PageProps) => {
  const router = useRouter();
  const { slug } = router.query;
  const { pages } = useSelector((state: RootState) => state.pages);

  console.log(pageContent);

  if (pages.length && pages.find((page) => page.slug === `/${slug}`) === undefined) {
    return <NotFound />
  }

  return (
    <div>
      <Meta title={pageContent.title} description={pageContent.description} />
      <h1>{pageContent.title}</h1>
      <p>slug: {slug}</p>
      {pageContent.sections ? 
        pageContent.sections.map((section) => {
          if (section.type === 'hero') return (<SectionHero key={`${Math.random().toString(36).substr(2,8)}`} {...section} />);
          else if (section.type === 'cta') return (<SectionCTA key={`${Math.random().toString(36).substr(2,8)}`} {...section} />);
          else if (section.type === 'header') return (<SectionHeader key={`${Math.random().toString(36).substr(2,8)}`} {...section} />);
          else if (section.type === 'slider') return (<SectionSlider key={`${Math.random().toString(36).substr(2,8)}`} {...section} />);
          return <></>
        })
      : (<></>)}
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const pageContent = await apiPageDetail({params});
  return {props:{pageContent}};
}

export default Page;
