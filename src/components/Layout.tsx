// src/components/Layout.tsx

import { fetchPages } from '@/services/api';
import { AppDispatch, RootState } from '@/store/store';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pages, loading, error, loaded } = useSelector((state: RootState) => state.pages);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchPages());
    }
  }, [dispatch, loaded]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <header>
        <nav>
          <ul>
            {pages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
