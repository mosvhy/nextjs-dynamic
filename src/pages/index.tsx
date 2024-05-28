// src/pages/index.tsx

import Meta from '@/components/Meta';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Meta title="HOME" description="Home Description" />
      <h1>{t('greeting')}</h1>
    </div>
  );
};

export default Home;
