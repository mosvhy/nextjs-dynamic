// src/components/Meta.tsx

import Head from 'next/head';

const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default Meta;
